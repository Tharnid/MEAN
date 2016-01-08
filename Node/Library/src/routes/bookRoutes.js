var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

// mongo cli
// show collections
// db.books.find();

// Routing
var router = function(nav) {
    bookRouter.route('/')
    .get(function (req, res) {
        var url =
            'mongodb://localhost:27017/tharnbraryApp';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.find({}).toArray(
                function(err, results) {
                    res.render('bookListView', {
                        title: 'Books',
                        nav: nav,
                        books: results
                    });
                }
            );
        });
    });
    return bookRouter;
};

// export to gain access....module not modules
module.exports = router;