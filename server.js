/**
 * Created by AwH on 24/11/15.
 */

var express = require("express");
var app = express();
var bodyParser = require("body-parser");


if(app.listen(3000)){
    console.log('Application disponible sur le port 3000');
} else {
    console.log('L\'application n\'a pas pu etre demaree');
}