/*const client = require('../client');

function all() {
  const query = `select * from categorias;`;
  return client.query(query)
}

function select(id) {
  const query = `select categorias.* from categorias
                where id = ${id};`;
  return client.query(query)
}

function selectBy(key, value) {
  const query = `select categorias.* from categorias
                  where ${key} = ${value};`;
  return client.query(query)
}

function insert(categoria) {
  const columns = Object.keys(categoria);
  let values = Object.values(categoria);

  values = values.map(function (value) {
   return `'${value}'`;
  })

  const query = `insert into categorias (${columns.join(',')})
                  values (${values.join(',')})
                  returning *;`;

  return client.query(query);
}

function update(id, categoria) {
  const entries = Object.entries(categoria);

  let query = `update categorias set `;

  entries.forEach(function (key, index) {
    query += `${key[0]} = '${key[1]}'`;
    
    if(index < entries.length - 1) {
      query += `,`;
    }
  });

  query += `where id = ${id} returning *;`;
  return client.query(query);
}

// Delete es una palabra reservada y no se puede usar como nombre de funcion
function del(id) { 
  const query = `delete from categorias where id = ${id} returning *;`

  return client.query(query);
}

function selectCosas(categoria_id) {
  const query =   `select cosas.* from cosas
                  inner join cosas_categorias on cosas_categorias.cosa_id=cosas.id 
                  where cosas_categorias.categoria_id=${categoria_id};`
  
  return client.query(query);
}

function addCosa(categoria_id ,cosa_id) {
  const query = `insert into cosas_categorias (cosa_id, categoria_id)
                  values (${cosa_id}, ${categoria_id})
                  returning *;`;

  return client.query(query);
}

function removeCosa(categoria_id, cosa_id) {
  const query = `delete from cosas_categorias where
                  cosa_id = ${cosa_id} and categoria_id = ${categoria_id}
                  returning *;`;

  return client.query(query);
}

module.exports = {
  all,
  select,
  selectBy,
  insert,
  update,
  del,
  selectCosas,
  addCosa,
  removeCosa,
};
*/