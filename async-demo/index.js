console.log('Before');
getUser(1, (user) => {
    console.log('USER params: ', user);
    console.log('now get user\'s github repos');
    getUserGithubRepos(user.id, function(repos) {
        console.log('User repositories: ', repos);
        
        console.log('now read user commits...')
        getUserRepoCommites(user.name, (commits) => {            
            if (commits.length > 0) {
                console.log('User\s commits: ', commits);
            } else {
                console.log('User doesn\'t have commits in the repo');
            }
        })
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
        callback({ id: id, name: 'milos' });
    }, 2000);    
}

// get user repositories
function getUserGithubRepos(id, calback) {
    setTimeout(() => {
        calback(['repo1', 'repo2', 'repo3']);
    }, 2000);    
}

function getUserRepoCommites(username, commits) {
    setTimeout((username) => {
        console.log('Here will be developed connecting to the repo and get commits');
        //let commits_arr = [];
        let commits_arr = ['commit1', 'commit2', 'commit3' ];
        commits(commits_arr);
    }, 
    2000);
}