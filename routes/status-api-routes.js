var db = require("../models");

module.exports = function (app) {

    app.post("/api/status", function (req, res) {
        db.User.findOne({
            where: {
                phone_number: req.body.phone_number //this may change
            }
        }).then(function(user){
            console.log(user);
            return user.id;
        }).then(function(userid){
            db.Status.create({
                location: req.body.location,
                comments: req.body.comments,
                UserId: userid,
            }).then(function(){
                res.end();
            })
        })
    });
};