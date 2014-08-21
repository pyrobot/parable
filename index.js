'use strict';

var Primus = require('primus')
  , http = require('http')
  , express = require('express');

var app = express();

app.use(express.static('www'));

var server = http.createServer(app)
  , primus = new Primus(server, {});

server.listen(8000, function () {
	console.log('Server started on port 8000');
});
