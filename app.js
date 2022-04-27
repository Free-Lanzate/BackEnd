const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');

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