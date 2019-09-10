const express = require('express');
const router = express.Router();

const Categorias = require('../queries/categorias');

router.get('/', async function(req, res, next) {
  const result = await Categorias.all().catch(next);
  res.send(result.rows)  
});

router.post('/', async function(req, res, next) {
  const categoria = req.body;
  const result = await Categorias.insert(categoria).catch(next);
  res.send(result.rows);
});

router.get('/:id', async function(req, res, next) {
  const id = req.params.id;
  const categoria = await Categorias.select(id).catch(next); 
  const cosas = await Categorias.selectCosas(id).catch(next);
  res.send({ categoria: categoria.rows[0], cosas: cosas.rows });
});

router.put('/:id', async function(req, res, next) {
  const id = req.params.id;
  const categoria = req.body;
  const result = await Categorias.update(id, categoria).catch(next);
  res.send(result.rows);
});

router.delete('/:id', async function(req, res, next) {
  const id = req.params.id;
  const result = await Categorias.del(id).catch(next);
  res.send(result.rows);
});

router.get('/:id/cosas', async function(req, res, next) {
  const id = req.params.id;
  const result = await Categorias.selectCosas(id).catch(next);
  res.send(result.rows);
});

router.post('/:id/:cosa_id', async function(req, res, next) {
  const id = req.params.id;
  const cosa_id = req.params.cosa_id;
  const result = await Categorias.addCosa(id, cosa_id).catch(next);
  res.send(result.rows);
});

router.delete('/:id/:cosa_id', async function(req, res, next) {
  const id = req.params.id;
  const cosa_id = req.params.cosa_id;
  const result = await Categorias.removeCosa(id, cosa_id).catch(next);
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
