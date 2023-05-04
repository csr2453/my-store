const express = require('express');
const faker = require('faker');

const router = express.Router();

//Ruta productos
router.get('/',(request,response)=>{
  const products = [];
  const {size} = request.query;
  const limit = size || 10;
  for (let index=0; index<limit; index++){
    products.push(
      {
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
      }
    );
  }

  response.json(products);
});

roter.get('/filter', (req, res)=>{
  res.send('I am a filter');
});

//Recuperamos un product especifico
router.get( '/:id', (request, response) =>{
  const id = request.params.id;
  response.json(
    {id, name:'Keyboard', price:22},
  );
} );

module.exports = router;
