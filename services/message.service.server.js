
module.exports = function (app) {
    app.post('/api/message', postMessage);
    var messageModel = require('../models/message/message.model.server');


    function postMessage(req, res) {
        console.log("In server post message");
        var message = req.body;
        //console.log("BODY:"+JSON.stringify(req.body));
        // var currentUser = req.session.currentUser;
        // var userId = currentUser._id;


        // ad["seller"] = userId;
        messageModel.createMessage(message)
            .then(function (message) {
                // req.session['currentUser'] = user;
                // console.log("SERVR USR:"+user);
                res.send(message);
            })
    }




};