var express = require('express');

var bookRouter = express.Router();

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

// export to gain access....module not modules
module.exports = bookRouter;