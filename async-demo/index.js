console.log('Before');

// 1. Callbacks
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

// 2. Promises
// getUser(1)
// .then(user => getUserGithubRepos(user.id))
// .then(repos => getUserRepoCommites(repos[0]))
// .then(commits => console.log('Commits', commits))
// .catch(err => console.log(err));

// 3. Async and wait
async function getCommits() {
    try {
        const user = await getUser(1);
        const repos = await getUserGithubRepos(user.id);
        const commits = await getUserRepoCommites(user.name);
        console.log('Fetched user commits', commits);
    } 
    catch(err) {
        console.log('Error...', err.message)
    }
}

getCommits();

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
            //reject(new Error('I\m testing returning error from promise called from async function'));
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