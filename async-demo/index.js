console.log('Before');
// getUser(1, (user) => {    
//     console.log('USER params: ', user);
//     getUserGithubRepos(user.id, (repos) => {
//         console.log('USER repos: ', repos);
//         getUserRepoCommites(user.name, (commits) => {            
//             if (commits.length > 0) {
//                 console.log('User\s commits: ', commits);
//             } else {
//                 console.log('User doesn\'t have commits in the repo');
//             }
//         })
//     })
// });

getUser(1)
.then(user => console.log('User fetched ', user));

console.log('After');

// use promise (instead of callback)
function getUser(id) {    
    console.log('Reading a user from a database...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {                    
            resolve({ id: id, name: 'milos' });
        }, 2000);
    });    
}

// get user repositories
function getUserGithubRepos(id) {
    console.log('now get user\'s github repos');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

// get user repository commits
function getUserRepoCommites(username) {
    console.log('now read user commits...');
    return new Promise((resolve, reject) => {
        setTimeout((username) => {        
            let commits_arr = ['commit1', 'commit2', 'commit3' ];
            resolve(commits_arr);
        }, 
        2000);
    });
}