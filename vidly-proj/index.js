const Joi = require('joi');

const express = require('express');

const app = express();

app.use = express.json();

const genres = [];

/* Routes for application */
// get genre
app.get('/api/genres', (req, res) => {

    console.log(genres);

    if (genres.length == 0) {
        return res.send('There is not even one inserted genre.');    
    }

    res.send(genres);

});


app.post('/api/genres', (req, res) => {
    console.log('ok ovde f-ja za kreiranja genre-a');
    res.sendStatus(202);
});
/* end Routes */


let app_port = process.env.PORT || 3000;

app.listen(app_port, function() {
    console.log('applikacija slusa na portu ' + app_port);
});



//api/genres
