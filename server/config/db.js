const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'provasenai'
})

module.exports = db;