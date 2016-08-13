var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.reviewsCreate = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

module.exports.reviewsReadOne = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

module.exports.reviewsUpdateOne = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

module.exports.reviewsDeleteOne = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};