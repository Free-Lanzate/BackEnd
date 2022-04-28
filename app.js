const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
const db = require('./models/index')

// Update database function
function updateDatabase(){
     db.sequelize.sync({ force: true });
     console.log("All models were synchronized successfully.");
     // Falta automatizar el comando npx sequelize-cli db:seed:all que 
     // crea las semillas (las filas demos de las tablas)
}
var arguments = process.argv
if (arguments[2] == "updateDatabase"){
     updateDatabase();
}

const http = require('http');
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded());
require("./routes")(app);
app.get('/', (req, res) => res.status(200).send({
     message: 'Bienvenido a Freelanzate',
}));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
app.use(logger('dev'));
module.exports = app;