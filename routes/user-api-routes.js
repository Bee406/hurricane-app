var db = require("../models");
var accountSid = "AC63971f4d955603f2b2176c4e7b2847ec";
var authToken = "d13e6769e26dcfac0e2ea00fbe0777e2";

var client = require("twilio")(accountSid, authToken);


module.exports = function (app) {

    app.get("/api/users", function (req, res) {
        db.User.findAll({
            include: [db.Status]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:number", function (req, res) {
        db.User.findOne({
            where: {
                phone_number: req.params.number
            },
            include: [db.Status]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/users", function (req, res) {

        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            email: req.body.email,
        }).then(function (newUser) {
            return newUser.id;
        }).then(function(userid){
            db.Status.create({
                location: req.body.location,
                comments: req.body.comments,
                UserId: userid,
            }).then(function(){
                client.messages.create({
                    body: req.body.first_name + " has posted a new status on SafeChex. Please log on to the site and enter " + req.body.first_name + "'s number (" + req.body.phone_number + ") to see the update.",
                    to: "+17204704967",
                    from: "+17205943512"
                }).then((message) => console.log("TWILIO MESSAGE ", message.sid))
                .done();
                res.end();
            })
        })
    });

    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({ where: { id: req.params.id } }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};