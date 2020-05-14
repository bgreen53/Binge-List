var orm = require("../config/orm");


var show = {
    all: function(cb) {
      orm.selectAll("shows", function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("shows", objColVals, condition, function(res) {
        cb(res);
      });
    },
  
}

module.exports = show;