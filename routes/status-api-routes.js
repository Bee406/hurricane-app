var db = require("../models");
var accountSid = "AC63971f4d955603f2b2176c4e7b2847ec";
var authToken = "d13e6769e26dcfac0e2ea00fbe0777e2";

var client = require("twilio")(accountSid, authToken);

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
            console.log("USER FIRST: ", user);
            console.log("ID", user.dataValues.id);
            return user.dataValues;
        }).then(function(userinfo){
            db.Status.create({
                comments: req.body.comments,
                UserId: userinfo.id,
            }).then(function(){
                client.messages.create({
                    body: userinfo.first_name + " has posted a new message on SafeChex. Please visit the site to see the update.", 
                    to: "+17204704967",
                    from: "+17205943512"
                }).then((message) => console.log("TWILIO MESSAGE ", message.sid))
                .done();
                //res.end();
                res.sendStatus(200);
            })
        }).catch(function(error){
            res.sendStatus(418);
        });
    });
};