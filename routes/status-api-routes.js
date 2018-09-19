var db = require("../models");

module.exports = function (app) {

    app.post("/api/status", function (req, res) {
        console.log("NUMBER: ", req.body);
        
        db.User.findOne({
            where: {
                phone_number: req.body.phone_number //this may change
            }
        }).then(function(user){
            console.log("USER: ", user);
            console.log("STATUSES", user.dataValues.id);
            return user.dataValues.id;
        }).then(function(userid){
            db.Status.create({
                comments: req.body.comments,
                UserId: userid,
            }).then(function(){
                res.end();
            })
        })
    });
};