const app = require('express');
const router = app.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'My express APP', message: 'Hello'});
    //res.send('Hey, this is response from the server!');
});

module.exports = router;