const os = require('os');


var totMem = os.totalmem();

var freeMem = os.freemem();


// console.log('Total memory: ' + totMem);
//
// console.log('Free memory: ' + freeMem);

// ECMA (type script 6 way of printing variables (without single quotes and concatenation))
console.log(`Total memory: ${totMem}`);
console.log(`Free memory ${freeMem}`);