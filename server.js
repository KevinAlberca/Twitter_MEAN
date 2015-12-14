/**
 * Created by AwH on 24/11/15.
 */

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    port = process.env.PORT || 3000;


app.use(bodyParser.json({ extends:true }));
app.use(bodyParser.json());
app.use("/", express.static("./"));
app.use("/node_modules/angular", express.static("./node_modules/angular"));
app.use("/node_modules/angular-route", express.static("./node_modules/angular-route"));

app.use(passport.initialize());
app.use(passport.session());

require("./config/routes")(app);

if(app.listen(port) && mongoose.connect("mongodb://localhost/twitter")){
    exports = module.exports = app;
    console.log("Application disponible sur le port " + port + "\nServeur Mongoose en ligne");
} else {
    console.log("L'application n'a pas pu etre demaree");
}
