const startupDebuger = require('debug')('app:startup');
const dbDebuger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const authent = require('./authentication.js');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

// needed to define that response will be in json format
app.use(express.json());

// needed to allow sending params from html input elements
app.use(express.urlencoded( {extended: true}));

app.use(express.static('public'));

app.use(helmet());

app.use('/api/courses', courses);

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Host: ' + config.get('host_info.host'));
console.log('Host password: ' + config.get('host_info.password'));

if (app.get('env') === 'development') {
    console.log('Development mode - we\'ve started logging each request in the console');
    app.use(morgan('tiny'));
    startupDebuger('Morgan enabled because env is set in development mode');
}

// DB work
dbDebuger('Connected to the database...');

// middleware 1 (loging) - express (loaded from other file)
app.use(logger);

// middleware 2 (authenticating) - express  (loaded from other file)
app.use(authent);

app.use('/', home);

var port_for_http_listening = process.env.PORT || 3000;

// start server by listening on the given port and print out the info message to the console
app.listen(port_for_http_listening, () => console.log(`Listening on port ${port_for_http_listening}`));
