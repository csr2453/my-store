const express = require('express');
const faker = require('faker');

const router = express.Router();


router.get( '/', (req,res)=>{
  const categories = [];
  const { size } = res.require;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    categories.push(
      {
        name: faker.categories.name,
        detail: faker.detlle.detail,
      }
    );
  }

  res.json(categories);
} );
module.exports = router;
