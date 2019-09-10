/*const express = require('express');
const router = express.Router();

const Cosas = require('../queries/cosas');

router.get('/', async function(req, res, next) {
  const result = await Cosas.all().catch(next); 
  res.send(result.rows);
});

router.post('/', async function(req, res, next) {
  const cosa = req.body;
  const result = await Cosas.insert(cosa).catch(next);
  res.send(result.rows);
});

router.get('/:id', async function(req, res, next) {
  const id = req.params.id;
  const cosa = await Cosas.select(id).catch(next); 
  const categorias = await Cosas.selectCategorias(id).catch(next);
  res.send({ cosa: cosa.rows[0], categorias: categorias.rows });
});

router.put('/:id', async function(req, res, next) {
  const id = req.params.id;
  const cosa = req.body;
  const result = await Cosas.update(id, cosa).catch(next);
  res.send(result.rows);
});

router.delete('/:id', async function(req, res, next) {
  const id = req.params.id;
  const result = await Cosas.del(id).catch(next);
  res.send(result.rows);
});

router.get('/:id/categorias', async function(req, res, next) {
  const id = req.params.id;
  const result = await Cosas.selectCategorias(id).catch(next);
  res.send(result.rows);
});

router.post('/:id/:categoria_id', async function(req, res, next) {
  const id = req.params.id;
  const categoria_id = req.params.categoria_id;
  const result = await Cosas.addCategoria(id, categoria_id).catch(next);
  res.send(result.rows);
});

router.delete('/:id/:categoria_id', async function(req, res, next) {
  const id = req.params.id;
  const categoria_id = req.params.categoria_id;
  const result = await Cosas.removeCategoria(id, categoria_id).catch(next);
  res.send(result.rows);
});

router.all('*', function (err, req, res, next) {
  if (err) { 
    res.send(err);
  } else {
    res.send();
  }
});

module.exports = router;
*/