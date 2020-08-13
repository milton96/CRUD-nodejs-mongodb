require('dotenv').config();

const app = require('./server');
require('./database');

const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
  console.log('Environment:', process.env.NODE_ENV);
});
