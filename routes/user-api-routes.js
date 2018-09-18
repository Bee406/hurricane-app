var db = require("../models");

module.exports = function (app) {

    app.get("/api/users", function (req, res) {
        console.log("test");
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
            first_name: req.body.validationCustom01,
            last_name: req.body.validationCustom02,
            phone_number: 
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({ where: { id: req.params.id } }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};