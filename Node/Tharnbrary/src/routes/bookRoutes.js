var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

// mongo cli
// show collections
// db.books.find();

// Routing
var router = function(nav) {
    var bookService =
        require('../services/goodreadsService')();
    var bookController =
        require('../controllers/bookController')(bookService, nav);
    bookRouter.use(bookController.middleware);
    bookRouter.route('/')
    .get(bookController.getIndex);
    bookRouter.route('/:id')
    .get(bookController.getById);
    return bookRouter;
};

// export to gain access....module not modules
module.exports = router;