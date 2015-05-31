var main = require('./handlers.js');

module.exports = function(app) {
	app.get('/login', main.login);
}