var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.CheckIn.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        CheckIns: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/checkins/:id", function(req, res) {
    db.CheckIn.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      console.log(dbExample.dataValues.id);
      res.render("example", {
        CheckIn: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
