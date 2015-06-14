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

// set up handlebars view engine
var handlebars = require('express3-handlebars').create({
    defaultLayout:'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Static Assets to be served
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/templates'));
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.render('login');
});


// Server
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function(){
	console.log( 'Express started in ' + app.get('env') +
		' mode on http://localhost:' + app.get('port') +
		'; press Ctrl-C to terminate.' );
});