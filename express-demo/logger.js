// middleware 1 (loging) - express 
function log(req, res, next) {
    console.log('Logging...');
    next();
}

module.exports = log;