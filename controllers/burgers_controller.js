var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
        var burgersObj = {
            burgers: data
        };
        console.log(burgersObj);
        res.render("index", burgersObj);
    });
});

router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burgerName, function() {
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res) {
    burger.updateOne(req.body.devoured, req.params.id, function() {
        res.redirect("/burgers");
    });
});

router.delete("/burgers/delete/:id", function(req, res) {
    burger.deleteOne(req.params.id, function() {
        res.redirect("/burgers");
    });
});

module.exports = router;