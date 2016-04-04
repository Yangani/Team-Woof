var mongoose = require('mongoose');
mongoose.connect("mongodb://cityquest:512austin@ds015690.mlab.com:15690/cityquest", function(){});
var db = mongoose.connection;

module.exports.db = db;


