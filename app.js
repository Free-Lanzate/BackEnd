const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');

const http = require('http');
const app = express();
require("./routes")(app);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.status(200).send({
     message: 'Bienvenido a Freelanzate',
}));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
console.log("Corriendo en localhost:8000")
module.exports = app;