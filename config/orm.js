var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb){
        var qs = "SELECT * from ??"
        connection.query(qs,[table], function(err,res){
            if (err) throw err;
            
            cb(res)
        })
    }
}