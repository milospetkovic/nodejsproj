const Joi = require('joi');
const express = require('express');
const router = express.Router();

// all available genres
const genres = [];

/* Routes for application */
// Create genre
router.post('/', (req, res) => {
    
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

    console.log('genre with name ' + req.body.name + ' has been added to collection');

    // response
    return res.send(genres);
});

//  get all genres
router.get('/', (req, res) => {

    console.log('list all genres');

    if (genres.length == 0) {
        return res.send('There is not even one inserted genre.');    
    }

    res.send(genres);
});

//  get only one genre (with id)
router.get('/:id', (req, res) => {

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
router.put('/:id', (req, res) => {

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
router.patch('/:id', (req, res) => {
    
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

module.exports = router;