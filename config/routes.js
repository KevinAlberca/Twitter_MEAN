/**
 * Created by AwH on 25/11/15.
 */


module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(__dirname);
    });

    app.post('/messages/new', function(req, res){
        console.log(req.body);
    });

    app.post('/users/new', function(req, res){
        console.log(req.body);
        res.sendStatus(200);
    });
};
