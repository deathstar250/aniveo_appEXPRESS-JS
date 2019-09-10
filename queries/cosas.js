/*const client = require('../client');

function all() {
  const query = `select * from cosas;`;
  return client.query(query)
}

function select(id) {
  const query = `select cosas.* from cosas
                where id = ${id};`;
  return client.query(query)
}

function selectBy(key, value) {
  const query = `select cosas.* from cosas
                  where ${key} = ${value};`;
  return client.query(query)
}

function insert(cosa) {
  const columns = Object.keys(cosa);
  let values = Object.values(cosa);

  values = values.map(function (value) {
    return `'${value}'`;
  })

  const query = `insert into cosas (${columns.join(',')})
                  values (${values.join(',')})
                  returning *;`;
  
  return client.query(query);
}

function update(id, cosa) {
  const entries = Object.entries(cosa);

  let query = `update cosas set `;

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
  const query = `delete from cosas where id = ${id} returning *;`

  return client.query(query);
}

function selectCategorias(cosa_id) {
  const query =   `select categorias.* from categorias
                  inner join cosas_categorias on cosas_categorias.categoria_id=categorias.id 
                  where cosas_categorias.cosa_id=${cosa_id};`
  
  return client.query(query);
}

function addCategoria(cosa_id ,categoria_id) {
  const query = `insert into cosas_categorias (categoria_id, cosa_id)
                  values (${categoria_id}, ${cosa_id})
                  returning *;`;

  return client.query(query);
}

function removeCategoria(cosa_id, categoria_id) {
  const query = `delete from cosas_categorias where
                  categoria_id = ${categoria_id} and cosa_id = ${cosa_id}
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
  selectCategorias,
  addCategoria,
  removeCategoria,
};
*/