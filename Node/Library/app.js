var express = require('express');

var app = express();

var port = 1974;

app.listen(1974, function(err) {
    console.log('Server running on port ' + port + '!!!');
});