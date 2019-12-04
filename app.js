// const os = require('os');
// var totMem = os.totalmem();
// var freeMem = os.freemem();
// // console.log('Total memory: ' + totMem);
// //
// // console.log('Free memory: ' + freeMem);
// // ECMA (type script 6 way of printing variables (without single quotes and concatenation))
// console.log(`Total memory: ${totMem}`);
// console.log(`Free memory ${freeMem}`);

// const fs = require('fs');

// console.log(fs.readdir('./'));

// const fs = require('fs');

// fs.readdir('./', function(err, files) {
//     if (err) console.log('ERR: ' + err);
//     else console.log('OK, result files: ' + files);
// });

//const EventEmmiter = require('events');

// const Logger = require('./logger');

// logger = new Logger();


// // listener
// logger.on('message_loaded', (arg) => {

//     console.log('listener ispisuje - message has been loaded with arguments: ' + arg);

// });


// logger.log('ovde je neka poruka');

const server = require('http');

const httpServer = server.createServer( function(req, res) {

    console.log('server je kreiran');

    if (req.url ==='/') {
        res.write('Pozvana je home strana');
        res.end();
    }

    if (req.url === '/api/getcourses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

var port_number = 3123;

httpServer.listen(port_number);

console.log(`Listening on port ${port_number}`);


//const server = new 
