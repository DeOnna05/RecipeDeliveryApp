module.exports = function(sequelize, DataTypes) {
    const recipe = sequelize.define('recipe', {

    price: {
        type:DataTypes.INTEGER
    },
    
    recipe_name: {
        type: DataTypes.TEXT
     }, 

    category: {
        type: DataTypes.TEXT
    },
    
    description: {
       type: DataTypes.TEXT
    },

    ingredients: {
        type: DataTypes.TEXT
    },
    directions: {
      type:  DataTypes.TEXT
    },

    image: {
        type: DataTypes.TEXT
    }
}, {timestamps:false});
    

    return recipe;
}