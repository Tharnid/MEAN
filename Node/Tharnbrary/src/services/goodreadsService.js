
var goodreadsService = function() {

    var getBookById = function(id, cb) {
        cb(null, {description: 'Your bleeping description'});
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;