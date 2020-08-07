const mongoose = require('mongoose');
const { MONGODB_HOST, MONGODB_USER, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}.vxrsx.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('Se estableció una conexión a la base de datos.');
}).catch(err => {
    console.log('Ha ocurrido un error al conectar a la base de datos.');
});