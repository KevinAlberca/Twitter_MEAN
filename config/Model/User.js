/**
 * Created by AwH on 30/11/15.
 */

var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    username : String,
    password : String
});

mongoose.model('User', Schema);

module.exports = mongoose.model('User');