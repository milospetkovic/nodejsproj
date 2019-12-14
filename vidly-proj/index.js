// include joi module
const Joi = require('joi');

// include random string module
let randomstring = require("randomstring");

// include express module
const express = require('express');

// set new object of express module
const app = express();

// this is neede in order to know that we're working with json formats only!
app.use(express.json());

// all available genres
const genres = [];

/* Routes for application */

// Create genre
app.post('/api/genres', (req, res) => {
    
    // validate
    let validate_result = validateSentParams(req.body);
    if (validate_result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // create genre
    const genre = {
        id: genres.length + 1,        
        name: req.body.name
    };
    genres.push(genre); // add genre to the genres array/collection

    // response
    return res.send(genres);
});

//  get all genres
app.get('/api/genres', (req, res) => {

    console.log(genres);

    if (genres.length == 0) {
        return res.send('There is not even one inserted genre.');    
    }

    res.send(genres);
});

//  get only one genre (with id)
app.get('/api/genres/:id', (req, res) => {

    // check up if genre with id exists
    let genre = getGenreByID(req.params.id);
    if (!genre) {
        return res.status(400).send('ID of genre doesn\'t exist!');        
    }    

    //response
    console.log(`The genre with id ${req.params.id} has been fetched`);    
    res.status(200).send(genre);
});

// update genre
app.put('/api/genres/:id', (req, res) => {

    // check up if genre with id exists
    let genre = getGenreByID(req.params.id);
    if (!genre) {
        return res.status(400).send('ID of genre doesn\'t exist!');        
    }

    // validate input
    let validate_result = validateSentParams(req.body);
    if (validate_result.error) {
        res.status(400).send(validate_result.error.details[0].message);
        return;
    }

    // update genre    
    genre.name = req.body.name;

    // return response (all genres)
    console.log(`The genre with id ${req.params.id} has been updated`);    
    res.status(200).send(genres);
});

// delete genre
app.patch('/api/genres/:id', (req, res) => {
    
    // check up if id exists    
    let genre = getGenreByID(req.params.id);
    if (!genre) {
        return res.status(400).send('ID of genre doesn\'t exist!');        
    }

    // delete genre
    let indexOfGenre = genres.indexOf(genre); // get array index of genre with given id
    genres.splice(indexOfGenre, 1);

    // return response
    console.log(`The genre with id ${req.params.id} has been deleted`);    
    res.status(200).send(genres);
});
/* end Routes */

/* set up server and start listening on the port */

// port for listening
let app_port = process.env.PORT || 3000;

// start server listening
app.listen(app_port, function() {
    console.log('applikacija slusa na portu ' + app_port);
});

// validate params before sending to the server
function validateSentParams(sentParams) {
    const scheme = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(sentParams, scheme);    
}

// check up if od genre exists
function getGenreByID(id) {
    return genres.find(c => c.id === parseInt(id));
}