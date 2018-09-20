var db = require("../models");

module.exports = function (app) {

    app.post("/api/status", function (req, res) {
        console.log("NUMBER: ", req.body);
        
        db.User.findOne({
            where: {
                phone_number: req.body.phone_number
            }
        }).then(function(user){
            if(!user)
            {
                console.log("NO USER");
                throw new Error;
            }
            console.log("USER: ", user);
            console.log("ID", user.dataValues.id);
            return user.dataValues.id;
        }).then(function(userid){
            db.Status.create({
                comments: req.body.comments,
                UserId: userid,
            }).then(function(){
                //res.end();
                res.sendStatus(200);
            })
        }).catch(function(error){
            res.sendStatus(418);
        });
    });
};