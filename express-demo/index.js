// created directory express-demo
// go into the created dir and initialize nodejs project with command
// npm init --yes
// now install express module (needed for faster building web server)
// npm i express


// get express module
const express = require('express');

// initiate new object 
const app = express();

/* express methods for basic manipulationg with data (CRUD) */
// get data from the server
app.get();
// send data to the server to create an object
app.post();
// send data to the server to update an object
app.put();
// delete an object
app.delete();