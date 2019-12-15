
const p = new Promise((resolve, reject) => {
    // create async call to the server
    setTimeout(() => {
        //resolve(1);
        reject(new Error('info about error'));
    }, 2000);
});

p
    .then((result) => {
        console.log('OK ', result);
    })    
    .catch(err => {console.log('Error ', err.message)});