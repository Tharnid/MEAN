var express = require('express');

var app = express();

var port = process.env.PORT || 1974;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

// books

var books = [
    {
        title: 'Phoenix in Action',
        genre: 'Programming',
        author: 'Jason Terrell',
        read: false
    },
    {
        title: 'Elixir in Practice',
        genre: 'Programming',
        author: 'Tharnid Saldor',
        read: false
    },
    {
        title: 'Phoenix in Practice',
        genre: 'Programming',
        author: 'Jason Smith',
        read: false
    },
    {
        title: 'Elm in Action',
        genre: 'Programming',
        author: 'Dawn Nelson',
        read: false
    }
];

// Routing
bookRouter.route('/')
    .get(function (req, res) {
        //res.send('Hello...from Books!!!');
        res.render('books', {
            title: 'Books',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            },
        {
            Link: '/Authors',
            Text: 'Authors'
        }],
            books: books
        });
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello...from a single book!!!');
    });

app.use('/Books', bookRouter);

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