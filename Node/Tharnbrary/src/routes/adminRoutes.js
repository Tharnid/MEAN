var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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

var router = function (nav) {
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url =
                'mongodb://localhost:27017/tharnbraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books,
                    function(err, results) {
                        res.send(results);
                        db.close();
                    }
                );
            });
            // res.send('inserting books!!!');
        });
    return adminRouter;
};

module.exports = router;