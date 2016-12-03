var express = require('express');
var connect = require('connect');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(_dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());

require('./routes/routes.js')(app);

app.listen(port);

console.log('The App runs on port ' + port); 
