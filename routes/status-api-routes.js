var db = require("../models");

module.exports = function (app) {

    app.post("/api/status", function (req, res) {
        db.Status.create(req.body).then(function (dbStatus) {
            console.log("STATUS: ", dbStatus);
            res.json(dbStatus);
        });
    });
};