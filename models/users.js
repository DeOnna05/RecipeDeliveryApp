const save = require('./savedRecipes');

module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define('users', {

    lastName: {
        type:DataTypes.TEXT
    },

    firstName: {
        type:DataTypes.TEXT
    },

    userName: {
        type:DataTypes.TEXT
    },

    password: {
        type:DataTypes.TEXT
    },

}, {timestamps:false});

// users.hasMany(savedRecipes);
    

    return users;
}