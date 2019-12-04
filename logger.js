//(function (exports, require, module, __filename, __dirname) {

    // console.log(__filename);

    // console.log(__dirname);

const EventEmmiter = require('events');

class Logger extends EventEmmiter {

    log(message) {
        console.log(message);
        this.emit('message_loaded', { id: 12, 'key': 'value'});
    }    

}

// var url = 'http://elitasoft.com';

// // export url variable (endpoint)
// module.exports.endPointUrl = url;

module.exports = Logger;

//});




