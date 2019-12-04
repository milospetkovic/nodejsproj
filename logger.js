var url = 'http://elitasoft.com';

function log(message) {
    console.log(message);
}

// export log function
module.exports.log = log;

// export url variable (endpoint)
module.exports.endPointUrl = url;
