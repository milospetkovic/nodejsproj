console.log('Before');
getUser(1, retRepos);

console.log('After');

function retRepos(user) {    
    getUserGithubRepos(user.name, getCommits);
}

function getCommits(repos, getUserRepoCommits) {
    displayCommits(displayCommits);
}

function displayCommits(commits) {
    if (commits.length > 0) {
        console.log('user\s commits: ', commits);
    } else {
        console.log('user doesn\'t have commits in the repo');
    }
}

// callback get user
function getUser(id, callback) {
    //console.log('calback u user-u', callback);
    console.log('Start reading a user from a database...');
    setTimeout(() => {     
        let user = { id: id, name: 'milos' };
        console.log('user params: ', user);
        callback(user);
    }, 2000);    
}

// callback get user repositories
function getUserGithubRepos(id, callback) {
    //console.log('calback u getUserGithubRepos ', callback);
    console.log('now read user repositories...');
    setTimeout(() => {
        let repos = ['repo1', 'repo2', 'repo3'];
        console.log('user repos: ', repos);
        callback(repos);        
    }, 2000);    
}

// callback get user repo commits
function getUserRepoCommits(username, commits) {
    console.log('now read user commits...');
    setTimeout((username) => {
        //console.log('Here will be developed connecting to the repo and get commits');
        //let commits_arr = [];
        let commits_arr = ['commit1', 'commit2', 'commit3' ];
        //console.log('user repo commits: ', commits_arr);
        commits(commits_arr);
    }, 
    2000);
}