//Configuramos el servidor xpress
const express = require('express');
const { faker } = require('@faker-js/faker')

const app = express();
const port = 3000;

//Definimos una ruta con /
app.get('/', (request, response) => {
  response.send('Hola desde el server en expres');
});

//Nueva ruta
app.get('/new-path', (request, response) => {
  response.send('Esta es una nueva ruta');
});



app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  //De esta manera obtenemos los parametros que estan llegando por get
  const{categoryId, productId}=req.params;
  res.json(
    {
      categoryId,
      productId,
    }
  );
});


//COMO OBTENER PARAMETROS DE TIPO QUERYPARAMS
app.get('/users',(req,res)=>{
  const{limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parametros');
  }
})





//Le decimos a la app que escuche en un puerto específico
app.listen(port, () => {
  console.log('My port: ' + port);
});




