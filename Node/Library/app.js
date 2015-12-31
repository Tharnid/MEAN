var express = require('express');

var app = express();

//var port = 1974;

var port = process.env.PORT || 1974;

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');
//app.set('view engine', 'jade');

// handlebars
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', {title: 'Hello from render', list: ['Han', 'Lando', 'Chewy']});
});

//app.get('/', function (req, res) {
//    res.render('index');
//});

//app.get('/', function (req, res) {
//    res.render('index', {list: 'Han', 'Chewy', });
//});

app.get('/books', function (req, res) {
    res.send('Hello Books!!!');
});

app.listen(1974, function (err) {
    console.log('Server running on port ' + port + '!!!');
});