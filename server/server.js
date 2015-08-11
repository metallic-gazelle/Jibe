var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose');

// connect to mongo database named soundsource
mongoose.connect('mongodb://127.0.0.1:27017/jibe');

mongoose.connection.once('connected', function() {
  console.log('Connected to database!');
});

// set the port
var port = process.env.PORT || 8080;

var app = express();

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

//========================
// start app
//========================

// startup our app at http://localhost:8080
app.listen(port);

// shoutout
console.log('Server magic happens on port ' + port);

// export our app for testing and flexibility, required by app.js
module.exports = app;