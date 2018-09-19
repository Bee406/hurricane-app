var path = require("path");

module.exports = function(app) {
    app.get("/new_check_in", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/new_check_in.html"));
    });

    app.get("/update_check_in", function(req,res){
      res.sendFile(path.join(__dirname + "/../public/update_check_in.html"));
  });

    app.get("/check_on", function(req,res){
      res.sendFile(path.join(__dirname + "/../public/check_on.html"));
});

    // app.use(function(req,res) {
    //     res.sendFile(path.join(__dirname + "/../public/home.html"));
    // });

}



