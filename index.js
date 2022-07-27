const express = require('express');
const app = express();
const routerApi = require('./routes');
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola este es mi server');
});

routerApi(app);

app.listen(port, () => {
  console.log('app listen at port: ' + port);
});
