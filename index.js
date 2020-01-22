const express = require('express')
const dotenv = require('dotenv')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const expressValidator = require('express-validator')
const bookRoutes = require('./routes/book')

const app = express()


// Leer los archivos .env y cargarlos a process.env
dotenv.config()

// Middlewares del server
app.use(bodyParser.json())
app.use(expressValidator())
app.use(cors())


// var con = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PW,
//     database : 'db_books'
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });


// Importar las rutas
app.use('/api/v1.0/books', bookRoutes);

const port = 8000;

app.listen(port, () => { console.log(`A node JS API is listening on port: ${port}`) })