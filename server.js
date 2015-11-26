/**
 * Created by AwH on 24/11/15.
 */

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 3000;


app.use(bodyParser.json({ extends:true }));
app.use(express.static(__dirname + '/config'));
app.use('/config', express.static('./config'));
app.use('/', express.static('./'));


require('./config/routes')(app);

if(app.listen(port)){
    exports = module.exports = app;
    console.log("Application disponible sur le port " + port);
} else {
    console.log("L'application n'a pas pu etre demaree");
}