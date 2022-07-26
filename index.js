const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola este es mi server');
});

app.listen(port, () => {
  console.log('app listen at port: ' + port);
});
