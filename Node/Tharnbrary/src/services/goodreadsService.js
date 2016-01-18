var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

var goodreadsService = function() {

    var getBookById = function(id, cb) {
        
        var options = function(id, cb) {
            host: 'www.goodreads.com',
            path: '/book/show/656?format=xml&key=A3ZwnoAlQSudKqDHWXgVYg'
        };       
        var callback = function(response) {
            var str = '';
            
            response.on('data', function(chunk) {
                str += chunk;
            });
            response.on('end', function() {
                console.log(str);
                parser.parseString(str,
                    function(err, result) {
                        cb(null, 
                           result.GoodreadsResponse.book);
                });
            });
        };
//        cb(null, {description: 'Your bleeping description'});
        
        http.request(options, callback).end();
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;