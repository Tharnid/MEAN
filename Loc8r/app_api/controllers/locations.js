var mongoose = require('mongoose');
var Loc = mongoose.model('Location');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsCreate = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

module.exports.locationsReadOne = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

module.exports.locationsUpdateOne = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

module.exports.locationsListByDistance = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

module.exports.locationsDeleteOne = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

