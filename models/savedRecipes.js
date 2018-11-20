const users = require('./users');
const recipes = require('./recipes')

module.exports = function(sequelize, DataTypes) {
    const savedRecipes = sequelize.define('savedRecipes', {

    recipeId: {
        type:DataTypes.INTEGER
    },

}, {timestamps:false});

// savedRecipes.belongsTo(users,{through: recipes})
    

    return savedRecipes;

}



