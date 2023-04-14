const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/clientes', (req, res) => {
    res.sendFile(__dirname + '/clientes.html');
  });

  app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/productos.html');
  });

const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);


//app.listen(3000, () => {
  //console.log('Aplicación en ejecución en el puerto 3000');
//});
