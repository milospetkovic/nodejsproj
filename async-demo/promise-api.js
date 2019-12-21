
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("Async function 1");
        resolve(1);
        //reject(new Error('info about error in promise 1'));
    }, 1500);
});

const p2 = new Promise((resolve) => {
    setTimeout(()=> {
        console.log("Async function 2");
        resolve(2);
    }, 3000);
});

// Promise.all([p1, p2])
// .then(result => console.log('Result', result))
// .catch(error => console.log('Error ocurred ', error.message));

Promise.race([p1, p2])
.then(result => console.log('Result', result))
.catch(error => console.log('Error ocurred ', error.message));