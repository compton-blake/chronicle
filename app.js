var express = require('express');
var credentials = require('./node/models/credentials.js');
var bodyParser = require('body-parser');
var connect = require('connect');
var mongoose = require('mongoose');
var MongoSessionStore = require('session-mongoose')(require('connect'));
var app = express();
var routes = require('./node/routes/routes.js')(app);

// Update to be dependent on the url
app.set('env', 'development');

switch(app.get('env')){
    case 'development':
        mongoose.connect(credentials.mongo.development.connectionString);
        break;
    case 'production':
        mongoose.connect(credentials.mongo.production.connectionString);
        break;
    default:
        throw new Error('Unknown execution environment: ' + app.get('env'));
};


app.use(express.static(__dirname));



// Server
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function(){
	console.log( 'Express started in ' + app.get('env') +
		' mode on http://localhost:' + app.get('port') +
		'; press Ctrl-C to terminate.' );
});