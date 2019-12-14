// created directory express-demo
// go into the created dir and initialize nodejs project with command
// npm init --yes
// now install express module (needed for faster building web server)
// npm i express

const startupDebuger = require('debug')('app:startup');
const dbDebuger = require('debug')('app:db');

const config = require('config');

const morgan = require('morgan');

const helmet = require('helmet');

// get joi module (module for validation inputs)
const Joi = require('joi');

// get express module
const express = require('express');

const logger = require('./logger.js');

const authent = require('./authentication.js');

// initiate new express object 
const app = express();

//console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//console.log(`app: ${app.get('env')}`);

// needed to define that response will be in json format
app.use(express.json());

// needed to allow sending params from html input elements
app.use(express.urlencoded( {extended: true}));

// if we create public folder and place it under the root of the application
// then we can have everything from that folder accessible via browser for instance.
// if we create readme.txt file in the public folder then it will be reachable 
// from the server via url http://localhost:3000/readme.txt
app.use(express.static('public'));

app.use(helmet());

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

/* express methods for basic manipulationg with data (CRUD) */
// get data from the server
//app.get();
// send data to the server to create an object
//app.post();
// send data to the server to update an object
//app.put();
// delete an object
//app.delete();

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
];


/* Routes */
app.get('/', (req, res) => {
    res.send('Hey, this is response from the server!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// an example for getting one course
// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);    
// });

// // return all params for resourse (year/month in this casa) call url for i.e. /api/courses/2019/12
// app.get('/api/courses/:year/:month', (req, res) => {
//     res.send(req.params);    
// });

// // with this method server return all params which are provided after ? sign in the url (comment above method to see this method in action..) 
// // for i.e. /api/courses/2019/12?sortBy=name
// app.get('/api/courses/:year/:month', (req, res) => {
//     res.send(req.query);    
// });

// return course with id or 404 page if course isn't found with additional info/message that course doesn't exist
// app.get('/api/courses/:id', (req, res) => {
//     let course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) {
//         res.status(404).send('ID of course doesn\'t exist');
//     }
//     res.send(course);    
// });


app.post('/api/courses', (req, res) => {    
    
    const schema = {
        name: Joi.string().min(3).required()
    };

    const resultValidate = Joi.validate(req.body, schema);

    if (resultValidate.error) {
        res.status(400).send(resultValidate.error);
        //res.status(400).send(resultValidate.error.details[0].message);
        console.log('POSTOJI GRESKA!');
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);

    res.send(course);

});

/* end Routes */

// the number of port where server is listening for requests
// process.env is object which is provided from node
// to set PORT variable just type in terminal (must be in nodejs project dir) export PORT=5000
// and now server will be listening on port 5000
// in case PORT variable isn't provided the server will be listening on the 3000 port
var port_for_http_listening = process.env.PORT || 3000;

// start server by listening on the given port and print out the info message to the console
app.listen(port_for_http_listening, () => console.log(`Listening on port ${port_for_http_listening}`));

/* USAGE */
// start nodejs server by placing in this, express-demo directory, and execute command
// node index.js
// the console, terminal, will print out that server is listening on the given port
// now, open browser and type
// http://localhost:3000
// the server will return string 'Hey, this is response from the server!' to the browser
// and try calling one more end point to the browser
// http://localhost:3000/api/courses
// which will return out a json response