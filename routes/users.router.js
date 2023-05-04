const express = require('express');
const faker = require('faker');

const router = express.Router();

//Get Users
router.get( '/', (req,res)=>{
  const users = [];
  const {size} = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    users.push( {
      name: faker.string.userName(),
      phone: faker.number.userPhone(),
    } );
  }
  res.json( users );
} );

module.exports = router;
