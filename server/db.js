const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sklep_komputerowy',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Połączenie z bazą danych nawiązane!');
});

module.exports = connection;
