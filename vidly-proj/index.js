// include express module
const express = require('express');

// set new object of express module
const app = express();

const router = require('./routes/genres');

// this is neede in order to know that we're working with json formats only!
app.use(express.json());


app.use('/api/genres', router);

/* set up server and start listening on the port */

// port for listening
let app_port = process.env.PORT || 3000;

// start server listening
app.listen(app_port, function() {
    console.log('applikacija slusa na portu ' + app_port);
});