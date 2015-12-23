var express = require('express');

var app = express();

var port = 1974;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res){
    res.send('Hello Route!!!');
});

app.get('/books', function(req, res) {
   res.send('Hello Books!!!'); 
});

app.listen(1974, function(err) {
    console.log('Server running on port ' + port + '!!!');
});