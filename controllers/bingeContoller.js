var express = require("express");

var router = express.Router();

var show = require("../models/shows")


router.get("/", function(req, res) {
    show.all(function(data) {
      var hbsObject = {
        shows: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.put("/api/shows/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    show.update({
      isbinged: req.body.isbinged
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  

  module.exports = router;