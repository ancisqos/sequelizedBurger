// In charge of creating express connection and running node server

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var exphbs = require('express-handlebars');

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);

const port = 3000;
app.listen(port);

// Sets up Express App
// =====================================================
// const app = express();
// const PORT = 3000;

