//Configuramos el servidor xpress
const express = require('express');
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

//Ruta productos
app.get('/products',(request,response)=>{
  response.json(
    [
      {name:'Cellphone',price:7000},
      {name:'Mouse',price:10},
    ]
  );
});
//Recuperamos un product especifico
app.get( '/products/:id', (request, response) =>{
  const id = request.params.id;
  response.json(
    {id, name:'Keyboard', price:22},
  );
} );

//Le decimos a la app que escuche en un puerto específico
app.listen(port, () => {
  console.log('My port: ' + port);
});
