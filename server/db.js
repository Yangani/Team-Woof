var mongoose = require('mongoose');
mongoose.connect("MONGODB-CREDENTIALS-DBUSER AND PASSWORD", function(){});
var db = mongoose.connection;

module.exports.db = db;


