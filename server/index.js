const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');  //import pakietu cors


const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//dodaj middleware cors
app.use(cors());

app.get('/api/produkty', (req, res) => {
  db.query('SELECT id_produktu,nazwa,zdjecie,cena,kategoria,specyfikacje,opis FROM produkty', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/api/uzytkownicy', (req, res) => {
  db.query('SELECT id_uzytkownika,imie,email,login,haslo,rola FROM uzytkownicy', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/api/loginy_maile', (req, res) => {
  db.query('SELECT login,email FROM uzytkownicy', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/api/uzytkownicy', (req, res) => {
  const { imie, email, login, haslo } = req.body;
  
  const sql = "INSERT INTO uzytkownicy (imie, email, login, haslo) VALUES (?, ?, ?, ?)";
  db.query(sql, [imie, email, login, haslo], (err, result) => {
    if (err) throw err;
    res.send('Użytkownik został dodany do bazy danych.');
  });
});

app.post('/api/login', (req, res) => {
  const { login, password } = req.body;
  db.query('SELECT * FROM uzytkownicy WHERE login = ? AND haslo = ?', [login, password], (err, results) => {
    if (err) throw err;
    if (results.length === 1) {
      const user = {
        id_uzytkownika: results[0].id_uzytkownika,
        imie: results[0].imie,
        email: results[0].email,
        login: results[0].login,
        rola: results[0].rola
      };
      res.status(200).json({ user });
    } else {
      res.sendStatus(401); // nieprawidłowe dane logowania
    }
  });
});

app.post('/api/emailChange', (req, res) => {
  const { email, id_uzytkownika} = req.body;
  
  const sql = "UPDATE uzytkownicy SET email = ? WHERE id_uzytkownika = ?";
  db.query(sql, [email, id_uzytkownika], (err, result) => {
    if (err) throw err;
    res.send('Email został zmieniony.');
  });
});

app.post('/api/passwordChange', (req, res) => {
  const { haslo, id_uzytkownika} = req.body;
  
  const sql = "UPDATE uzytkownicy SET haslo = ? WHERE id_uzytkownika = ?";
  db.query(sql, [haslo, id_uzytkownika], (err, result) => {
    if (err) throw err;
    res.send('Haslo zostało zmienione.');
  });
});

app.post('/api/oceny', (req, res) => {
  const { produkt_id } = req.body;
  db.query('SELECT o.opinia_id,o.tresc,o.ocena,u.imie FROM opinie o,uzytkownicy u WHERE o.produkt_id = ? AND o.uzytkownik_id = u.id_uzytkownika;', [produkt_id], (err, results) => {
    if (err) throw err;
    const oceny = results.map(result => ({
      id: result.opinia_id,
      tresc: result.tresc,
      ocena: result.ocena,
      imie: result.imie
    }));
    res.status(200).json(oceny);
  });
});

//koszyk
app.post('/api/koszyk', (req, res) => {
  const { user_id } = req.body;
  db.query('SELECT kp.id ,p.id_produktu, p.nazwa, p.cena, p.zdjecie, kp.ilosc FROM produkty p, koszyk_produkty kp, koszyk k WHERE k.uzytkownik_id = ? AND k.koszyk_id = kp.koszyk_id AND kp.id_produktu = p.id_produktu;', [user_id], (err, results) => {
    if (err) throw err;
    const koszyk = results.map(result => ({
      id: result.id,
      id_produktu: result.id_produktu,
      nazwa: result.nazwa,
      cena: result.cena,
      zdjecie: result.zdjecie,
      ilosc: result.ilosc
    }));
    res.status(200).json(koszyk);
  });
});

//usun produkt z koszyka
app.post('/api/deleteKoszyk', (req, res) => {
  const { id, koszyk_id } = req.body;
  db.query('DELETE FROM koszyk_produkty WHERE id = ? AND koszyk_id = ?;', [id,koszyk_id], (err) => {
    if (err) throw err;
    res.status(200).send(); // lub res.end()
  });
});


//dodaj produkt do koszyka
app.post('/api/addKoszyk', (req, res) => {
  const { produkt_id, user_id } = req.body;
  db.query('INSERT INTO koszyk_produkty (koszyk_id, id_produktu) SELECT k.koszyk_id, ? FROM koszyk k WHERE k.uzytkownik_id = ?;', [produkt_id, user_id], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

  //stworz liste o danej nazwie
  app.post('/api/addList', (req, res) => {
    const { user_id, nazwa } = req.body;
    db.query('INSERT INTO lista (uzytkownik_id, nazwa_listy) VALUES(?, ?);', [user_id, nazwa], (err) => {
      if (err) throw err;
      res.status(200).send();
    });
  });

  //pobierz nazwy list danego uzytkownika
  app.post('/api/listNames', (req, res) => {
    const { user_id } = req.body;
    db.query('SELECT lista_id,nazwa_listy FROM lista WHERE uzytkownik_id = ?;', [user_id], (err, results) => {
      if (err) throw err;
      const nazwyList = results.map(result => ({
        id: result.lista_id,
        nazwa: result.nazwa_listy,
      }));
      res.status(200).json(nazwyList);
    });
  });

  //pobierz produkty z list danego użytkownika
  app.post('/api/listProducts', (req, res) => {
    const { user_id } = req.body;
    db.query('SELECT lp.id_rekordu, lp.lista_id, p.id_produktu, p.nazwa, p.zdjecie, p.cena FROM lista_produkty lp, lista l,produkty p WHERE lp.lista_id = l.lista_id AND lp.id_produktu = p.id_produktu AND l.uzytkownik_id = ?;', [user_id], (err, results) => {
      if (err) throw err;
      const listProducts = results.map(result => ({
        id: result.id_rekordu,
        lista_id: result.lista_id,
        id_produktu: result.id_produktu,
        nazwa: result.nazwa,
        zdjecie: result.zdjecie,
        cena: result.cena,
      }));
      res.status(200).json(listProducts);
    });
  });

//delete list
app.post('/api/removeList', (req, res) => {
  const { lista_id } = req.body;
  db.query('DELETE FROM lista WHERE lista_id = ?', [lista_id], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

//add product to a list
app.post('/api/addListProduct', (req, res) => {
  const { lista_id, id_produktu } = req.body;
  db.query('INSERT INTO lista_produkty (lista_id, id_produktu) VALUES (?, ?);', [lista_id, id_produktu], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

//delete product from a list
app.post('/api/removeListProduct', (req, res) => {
  const { id_rekordu } = req.body;
  db.query('DELETE FROM lista_produkty WHERE id_rekordu = ?;', [id_rekordu], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

// dodaj zamowienie 
app.post('/api/addOrder', (req, res) => {
  const { user_id } = req.body;
  db.query('INSERT INTO zamowienia (id_uzytkownika, data_zamowienia) VALUES( ?, CURDATE());', [user_id], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

// get zamowienia
app.post('/api/getOrder', (req, res) => {
  const { user_id } = req.body;
  db.query('SELECT id_zamowienia, id_uzytkownika, data_zamowienia FROM zamowienia WHERE id_uzytkownika = ?;', [user_id], (err, results) => {
    if (err) throw err;
    const listOrders = results.map(result => ({
      zamowienie_id: result.id_zamowienia,
      zamowienie_data: result.data_zamowienia,
    }));
    res.status(200).json(listOrders);
  });
});

//add product to database
app.post('/api/addProductDB', (req, res) => {
  const { nazwa, cena, zdjecie, opis, kategoria, specyfikacje } = req.body;
  db.query('INSERT INTO produkty (nazwa, cena, zdjecie, opis, kategoria, specyfikacje) VALUES (?, ?, ?, ?, ?, ?);', [nazwa, cena, zdjecie, opis, kategoria, specyfikacje], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

//delete product from database
app.post('/api/deleteProductDB', (req, res) => {
  const { id_produktu } = req.body;
  db.query('DELETE FROM produkty WHERE id_produktu = ?', [id_produktu], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

//update database product
app.post('/api/updateProduct', (req, res) => {
  const { nazwa, cena, zdjecie, opis, kategoria, specyfikacje, id_produktu } = req.body;
  db.query('UPDATE produkty SET nazwa = ?, cena = ?, zdjecie = ?, opis = ?, kategoria = ?, specyfikacje = ? WHERE id_produktu = ?', [nazwa, cena, zdjecie, opis, kategoria, specyfikacje, id_produktu], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

//add review
app.post('/api/addReview', (req, res) => {
  const { produkt_id, uzytkownik_id, tresc, ocena } = req.body;
  db.query('INSERT INTO opinie (produkt_id, uzytkownik_id, tresc, ocena) VALUES(?, ?, ?, ?);', [produkt_id, uzytkownik_id, tresc, ocena], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

app.post('/api/ratingAvg', (req, res) => {
  const { produkt_id } = req.body;
  db.query('SELECT AVG(ocena) as srednia FROM opinie WHERE produkt_id = ?', [produkt_id], (err, results) => {
    if (err) throw err;
    const AVG = results[0].srednia;
    res.status(200).json(AVG);
  });
});

//usun produkty wszystkie z koszyka
app.post('/api/clearCart', (req, res) => {
  const { user_id } = req.body;
  db.query('DELETE from koszyk_produkty WHERE koszyk_id = ?;', [user_id], (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});


app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});
