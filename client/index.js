/*const { Client } = require('pg');
const initDB = require('./initDB');

let client = new Client({
   user: '',
   host: 'localhost',
   database: '',
   password: 'root',
   port: 5432,
 });

client = new Client();

client.connect();

initDB(client, function(){
  console.log("BD lista");
});

module.exports = client;

*/