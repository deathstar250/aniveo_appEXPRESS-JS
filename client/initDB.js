/*async function init(client, cb) {
  Promise.all([
    await crearCosas(client),
    await crearCategorias(client),
    await crearCosasCategorias(client),
  ]).then(cb());
}

async function crearCosas(client) {
  await client.query(`create table cosas (
                      id serial, 
                      nombre varchar(255) not null, 
                      primary key (id));`)
              .catch(err => {});
}

async function crearCategorias(client) {
  await client.query(`create table categorias (
                      id serial, 
                      nombre varchar(255) not null, 
                      primary key (id));`)
              .catch(err => {}); 
}

async function crearCosasCategorias(client) {
  await client.query(`create table cosas_categorias(
                      cosa_id int references cosas(id) on delete cascade on update cascade,
                      categoria_id int references categorias(id) on delete cascade on update cascade);`)
              .catch(err => {});  
}

module.exports = (client, cb) => init(client, cb);
*/