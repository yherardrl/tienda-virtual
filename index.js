const express = require('express');
const app = express();
const routerApi = require('./routes');
const port = 3000;

//middleware
app.use(express.json());

//primera ruta de prueba
app.get('/', (req, res) => {
  res.send('Hola este es mi server');
});

//función para asignar rutas
routerApi(app);

app.listen(port, () => {
  console.log('app listen at port: ' + port);
});
