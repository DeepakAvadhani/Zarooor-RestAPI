var DataTypes = require("sequelize").DataTypes;
var _something = require("./something");
var _something2 = require("./something2");

function initModels(sequelize) {
  var something = _something(sequelize, DataTypes);
  var something2 = _something2(sequelize, DataTypes);


  return {
    something,
    something2,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
