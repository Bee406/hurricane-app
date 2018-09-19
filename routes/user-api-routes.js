var db = require("../models");

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