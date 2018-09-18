var db = require("../models");
var path = require("path");


module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.CheckIn.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       CheckIns: dbExamples
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  // app.get("/checkins/:id", function(req, res) {
  //   db.CheckIn.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     console.log(dbExample.dataValues.id);
  //     res.render("example", {
  //       CheckIn: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/new-check-in", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/new_check_in.html"));
  });

  // blog route loads blog.html
  app.get("/update-check-in", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/update_check_in.html"));
  });

  // authors route loads author-manager.html
  app.get("/check-on", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/check_on.html"));
  });
};
