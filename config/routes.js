/**
 * Created by AwH on 25/11/15.
 */


module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(__dirname);
    });
};