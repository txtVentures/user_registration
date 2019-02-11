'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first: DataTypes.STRING,
    last: DataTypes.STRING,  
    username: DataTypes.STRING,
    password: DataTypes.STRING,
   
  });

// ASSOCIATIONS DEFINED HERE
//   User.associate = function(models) {
//     models.User.hasMany(models.Task);
//   };

  return User;
};