// created directory express-demo
// go into the created dir and initialize nodejs project with command
// npm init --yes
// now install express module (needed for faster building web server)
// npm i express


// get express module
const express = require('express');

// initiate new express object 
const app = express();

/* express methods for basic manipulationg with data (CRUD) */
// get data from the server
//app.get();
// send data to the server to create an object
//app.post();
// send data to the server to update an object
//app.put();
// delete an object
//app.delete();


/* Routes */
app.get('/', (req, res) => {
    res.send('Hey, this is response from the server!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});
/* end Routes */

// the number of port where server is listening for requests
var port_for_http_listening = 3000;

// start server by listening on the given port and print out the info message to the console
app.listen(port_for_http_listening, () => console.log('Listening on port ' + port_for_http_listening));

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