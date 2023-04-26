const express = require('express');
const app = express();
const port = 3010;

//Definimos una ruta con /
app.get('/', (reques, response) => {
  response.send('Hola desde el server en expres');
});

//Le decimos a la app que escuche en un puerto específico
app.listen(port, () => {
  console.log('My port: ' + port);
});
