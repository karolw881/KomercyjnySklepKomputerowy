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
  db.query('SELECT id_produktu,nazwa,zdjecie,cena,kategoria,specyfikacje FROM produkty', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/api/uzytkownicy', (req, res) => {
  db.query('SELECT id,nazwa_uzytkownika,haslo,rola FROM uzytkownicy', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});
