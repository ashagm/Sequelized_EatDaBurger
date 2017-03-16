var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(results) {
            callback(results);
        });
    },

    insertOne: function(name, callback) {
        orm.insertOne("burgers", name, function(result) {
            callback(result);
        });
    },

    updateOne: function(devoured, burgerId, callback) {
        orm.updateOne("burgers", devoured, burgerId, function(result) {
            callback(result);
        });
    },

    deleteOne: function(burgerId, callback) {
        orm.deleteOne("burgers", burgerId, function(result) {
            callback(result);
        });
    }
};


module.exports = burger;