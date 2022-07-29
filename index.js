const express = require('express');
const app = express();
const cors = require('cors');
const routerApi = require('./routes');
const port = process.env.PORT || 3000;

//los middleware se deben colocar después de haber definido las rutas
const {
  logError,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/errorHandler');

//middleware
app.use(express.json());
app.use(cors());

// const whiteList = ['https://localhost:8080', 'https://myapp.com'];
// const option = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('No permitido el acceso'));
//     }
//   },
// };
// app.use(cors(option));

//primera ruta de prueba
app.get('/', (req, res) => {
  res.send('Hola este es mi server');
});

//función para asignar rutas
routerApi(app);

//middleware de errores (el orden en que se coloquen se van a ejecutar)
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('app listen at port: ' + port);
});
