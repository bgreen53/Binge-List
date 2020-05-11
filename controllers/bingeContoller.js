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
  

  module.exports = router;