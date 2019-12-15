console.log('Before');
getUser(1, (user) => {
    console.log('USER params: ', user);
    console.log('now get user\'s github repos');
    getUserGithubRepos(user.id, function(repos) {
        console.log('User repositories: ', repos);
    })
});

console.log('After');

// 3 Types of async calling
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

// get user repositories
function getUserGithubRepos(id, calback) {
    setTimeout(() => {
        calback(['repo1', 'repo2', 'repo3']);
    }, 2000);    
}