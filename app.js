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

const EventEmmiter = require('events');
const emmiter = new EventEmmiter();

emmiter.on('method_for_listener', (args) => {
    console.log(args);
    console.log('poziv listenera iz event-a');
});

emmiter.emit('method_for_listener', { id: 12, 'key': 'value' });
