console.log('Before');
getUser(1, (user) => {
    console.log('USER params: ', user);
});

console.log('After');

// 3 Types of asynch calling
// 1. Callbacks
// 2. Promises
// 3. Async/await

// callback
function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, github: 'milos' });
    }, 2000);    
}