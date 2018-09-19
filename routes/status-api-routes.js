var db = require("../models");

module.exports = function (app) {

    app.post("/api/status", function (req, res) {
        console.log("req.body.phone_number", req.body.phone_number);
        
        db.User.findOne({
            where: {
                phone_number: req.body.phone_number //this may change
            }
        }).then(function(user){
            console.log("USER: ", user.dataValues.id);
            //console.log("STATUSES", user.User.dataValues.id);
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