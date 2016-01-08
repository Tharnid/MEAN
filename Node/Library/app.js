var express = require('express');

var app = express();

var port = process.env.PORT || 1974;

var nav = [{
                Link: '/Books',
                Text: 'Book'
            },
            {
                Link: '/Authors',
                Text: 'Author'
            }
          ];

var adminRouter = require('./src/routes/adminRoutes')(nav);
var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

// Index

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from Render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello Books!!!');
});

app.listen(1974, function (err) {
    console.log('Server running on port ' + port + '!!!');
});