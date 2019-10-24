const express = require('express');
const bodyParser = require('body-parser');
//const morgana = require('morgana');
let pg = require('pg');
const cors = require('cors');
const PORT = 3001;



const app = express();
// let pool = new pg.Pool({
//   user: 'postgres',
//   database: 'Aniveo2',
//   password: 'root',
//   host: 'localhost', 
//   port: 4444,   
//   max: 10   
// });

 let pool = new pg.Pool({
  user: 'postgres',
  database: 'aniveo',
  password: 'aniveo',
  host: '10.1.2.5',
  port: 5432,   
  max: 10   
});




app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(morgana('dev'));

app.use(function(require, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen (PORT, () => console.log('Escuchando mounstro el puerto ' + PORT));

pool.connect((err,db,done) => {
  console.log("concectado makinola");
});

const ONE_USER = "select nombre from usuario where nombre = 'Kevin'";

app.get('/GetName', (request,response) => {
  pool.query(ONE_USER , (err,results) => {
    if(err){
      console.log(err)
      return response.send(err);
    }else{
      console.log(results)      
      return response.json({
        contenido:  results.rows
      });
    }
  });
});


const ONE_LINK = "select link from contenido where id = 4";

app.get('/GetLink', (request,response) => {
  pool.query(ONE_LINK , (err,results) => {
    if(err){
      return response.send(err);
    }else{
      return response.json({
        link:  results.rows
      });
    }
  });
});


const CONTENIDO = "select * from view_contenido";

app.get('/GetContenido-home', (request,response) => {
  pool.query(CONTENIDO , (err,results) => {
    if(err){
      return response.send(err);
    }else{
      return response.json({
        contenido:  results.rows
      });
    }
  });
});

  

app.get('/', (request,response) => {
  response.send('go to /products to see products');
});


const add_film = "insert into contenido values (1,'El padrino','Mafia','La historia de la familia de los corleone', 1, 'Michel Corleone', '2019-09-09','https://www.youtube.com/embed/gCVj1LeYnsc',3,1);"

app.get('/addFilm', (req,res) => {
  const {link} = req.query;
  response.send('pelicula agregada');
});

