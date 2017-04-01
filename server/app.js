var express = require('express'); // import express
var app = express(); // create an instance of express
var bodyParser = require('body-parser'); // import body-parser
var index = require('./routes/index.js'); // import index.js module

// establish our server's port
app.set('port', 5000);

// middle-ware hookups
app.use(bodyParser.urlencoded({extended: true})); // use body-parser
app.use(express.static('server/public')); // establish default file path

// modules
// base URL request
app.use('/', index);

// listen on our port
app.listen(app.get('port'), function() {
  // message to ourselves in the SERVER CONSOLE
  console.log('listening on port ', app.get('port'));
});
