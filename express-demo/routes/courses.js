// get joi module (module for validation inputs)
const Joi = require('joi');
const express = require('express');
const router = express.Router();

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
];

/* Routes */
router.get('/', (req, res) => {
    res.send(courses);
});

router.post('/', (req, res) => {    
    
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

module.exports = router;