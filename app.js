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

const fs = require('fs');

fs.readdir('./', function(err, files) {
    if (err) console.log('ERR: ' + err);
    else console.log('OK, result files: ' + files);
});