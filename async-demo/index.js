console.log('Before');
getUser(1, (user) => {    
    console.log('USER params: ', user);
    getUserGithubRepos(user.id, function(repos) {
        console.log('USER repos: ', repos);
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

// callback
function getUser(id, callback) {    
    console.log('Reading a user from a database...');
    setTimeout(() => {        
        callback({ id: id, name: 'milos' });
    }, 2000);
}

// get user repositories
function getUserGithubRepos(id, callback) {
    console.log('now get user\'s github repos');
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);    
}

// get user repository commits
function getUserRepoCommites(username, commits) {
    console.log('now read user commits...')
    setTimeout((username) => {        
        let commits_arr = ['commit1', 'commit2', 'commit3' ];
        commits(commits_arr);
    }, 
    2000);
}