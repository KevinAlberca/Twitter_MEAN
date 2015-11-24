/**
 * Created by AwH on 24/11/15.
 */

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;


if(app.listen(port)){
    console.log('Application disponible sur le port ' + port);
} else {
    console.log('L\'application n\'a pas pu etre demaree');
}