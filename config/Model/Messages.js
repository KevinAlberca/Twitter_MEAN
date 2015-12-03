var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    username : String,
    content : String,
    date: { 
        type: Date,
        default: Date.now
    }
});

mongoose.model('Messages', Schema);

module.exports = mongoose.model('Messages');