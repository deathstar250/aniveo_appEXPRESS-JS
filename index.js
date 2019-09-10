const express = require('express');
const bodyParser = require('body-parser');
//const morgana = require('morgana');
let pg = require('pg');
const PORT = 3002;



const app = express();
let pool = new pg.Pool({
  user: 'postgres',
  database: 'Aniveo',
  password: 'root',
  host: 'localhost',
  port: 4444,
  max: 10 
});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(morgana('dev'));

app.use(function(require, response, next) {
  response.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen (PORT, () => console.log('Escuchando mounstro el puerto ' + PORT));

pool.connect((err,db,done) => {
  console.log("concectado makinola");
});

const ALL_LINKS = 'select link from contenido';

app.get('/GetLink', (request,response) => {
  pool.query(ALL_LINKS, (err,rusults) => {
    if(err){
      return response.send(err);
    }else{
      return response.json({
        link: rusults
      });
    }
  });
});

app.get('/', (request,response) => {
  response.send('main');
});




/*  
  if(err) {
    return console.log(err);
  }else {
    db.query('SELECT * FROM USUARIO'), (err,table, result,fields) => {
      if (err){
        return console.log(err);
      }else {
        //console.log(db);
        return console.log(table.rows);
      }
    }  
  }
  
  //console.log(db);
});
*/