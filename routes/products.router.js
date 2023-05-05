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

  response.status(200).json(products);
});

//Recuperamos un product especifico
router.get( '/:id', (request, response) =>{
  const id = request.params.id;
  if( id==='999' ){
    response.status(404).json(
      {
        message:'Not found',
      }
    );
  }else{
    response.status(200).json(
      {id, name:'Keyboard', price:22},
    );
  }

} );

router.post('/', (req,res)=>{
  const body = req.body;
  res.status(201).json(
    {
      message:'Created',
      data:body,
    }
  );
});

router.patch('/:id', (req,res)=>{
  const{id}=req.params;
  const body = req.body;
  res.status(201).json(
    {
      id,
      message:'Partial Updated',
      data:body,
    }
  );
});

router.delete('/:id',(req,res)=>{
  const {id}=req.params;
  res.json(
    {
      message:'Deleted',
      id,
    }
  );
});

module.exports = router;
