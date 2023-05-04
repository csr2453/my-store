const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  //Creamos una ruta maestra o un path global
  const router = express.Router();
  app.use('/api/v1', router);
  //Se debe agregar una ruta por cada uno de los modulos
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
