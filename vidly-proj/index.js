const Joi = require('joi');

let randomstring = require("randomstring");

const express = require('express');

const app = express();

app.use = express.json();

const genres = [];

/* Routes for application */

// get all genres
app.get('/api/genres', (req, res) => {

    console.log(genres);

    if (genres.length == 0) {
        return res.send('There is not even one inserted genre.');    
    }

    res.send(genres);

});


// create genre
app.post('/api/genres', (req, res) => {
    // console.log('ok ovde f-ja za kreiranja genre-a');
    // res.sendStatus(202);

    const genre = {
        id: genres.length + 1,
        name: randomstring.generate(7)
    };

    genres.push(genre);

    return res.send(genres);

});

// update genre

// delete genre


/* end Routes */


let app_port = process.env.PORT || 3000;

app.listen(app_port, function() {
    console.log('applikacija slusa na portu ' + app_port);
});

function doesGenreIDExists(idGerne) {
    
}

//api/genres
