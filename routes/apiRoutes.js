var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/checkins", function(req, res) {
    db.CheckIn.findAll({}).then(function(dbCheckIn) {
      res.json(dbCheckIn);
    });
  });

  app.get("/api/checkins/:number", function(req, res){
    db.CheckIn.findOne({
      where: {
        phone_number: req.params.number
      }
    }).then(function(dbCheckIn) {
      res.json(dbCheckIn);
    });
  });

  // app.get("/api/checkins/:email", function(req, res){
  //   db.CheckIn.findOne({
  //     where: {
  //       email: req.params.email
  //     }
  //   }).then(function(dbCheckIn) {
  //     res.json(dbCheckIn);
  //   });
  // });

  // Create a new example
  app.post("/api/checkins", function(req, res) {
    db.CheckIn.create(req.body).then(function(dbCheckIn) {
      res.json(dbCheckIn);
    });
  });


  // Delete an example by id
  app.delete("/api/checkins/:id", function(req, res) {
    db.CheckIn.destroy({ where: { id: req.params.id } }).then(function(dbCheckIn) {
      res.json(dbCheckIn);
    });
  });
};
