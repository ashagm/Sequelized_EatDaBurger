var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    db.burgers.findAll({})
    .then(function(dbBurger) {
      res.render("index", {
        burgers: dbBurger  
      });
    });
});

router.post("/burgers/create", function(req, res) {
    db.burgers.create({
      burger_name: req.body.burgerName
    })
    .then(function(dbBurger) {
      res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res) {

    db.burgers.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
    .then(function(dbBurger) {
      res.redirect("/burgers");
    });
  });

// Export routes for server.js to use.
module.exports = router;