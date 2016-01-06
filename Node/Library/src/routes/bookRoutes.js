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
var router = function(nav) {
    bookRouter.route('/')
    .get(function (req, res) {
        res.render('bookListView', {
            title: 'Books',
            nav: nav,
            books: books
        });
    });

    bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Books',
            nav: nav,
            book: books[id]
        });
    });
    return bookRouter;
};

// export to gain access....module not modules
module.exports = router;