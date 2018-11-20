const express = require('express');
const router = express.Router();
const db = require('../models');

//get route to display all recipes - route for viewAll function ajax call
router.get('/api/recipes', function (req, res) {
    db.recipe.findAll({}).then(function (response, error) {
        if (error) {
            res.json({ error: error });
        } else {
            // console.log(response)
            res.json(response)
        }
    });
});

//get route to grab all recipes by the category the user selects - route for search_button ajax call
router.get('/api/search/:id', function (req, res) {
    db.recipe.findAll({where: {category: req.params.id
    }}).then(function (response, error) {
        if (error) {
            res.json({ error: error });
        } else {
            // console.log(req.params.id)
            res.json(response)
        }
    });
});


// router.put(‘/book/:bookId’, function (req, res, next) {
//     Book.update(
//       {title: req.body.title},
//       {where: req.params.bookId}
//     )
//     .then(function(rowsUpdated) {
//       res.json(rowsUpdated)
//     })
//     .catch(next)
//    })


//post route to add recipe to user table - route for card_link ajax call
router.post('/api/recipes/:id', function (req, res) {
    console.log('this is the post route')
    console.log(req.body.id)
    // res.json(req.body)
db.users.update(req.body, {where: {id: 1}}).then(function(response,error){
    if(error){
        res.json({ error: error });
    } else {
        res.json(response)
    }
})
});

//gets users list of recipes and ingredients from the user table and displays them - route for view_my_recipes ajax call

// join saves table on userId and RecipeId
// first method to use sequelize 
// second is to use a raw query
router.get('/api/users/myRecipes', function (req, res) {
    db.saved_recipes.findAll({where: {id:1}}).then(function (response, error) {
        if (error) {
            res.json({ error: error });
        } else {
            // console.log(response)
            res.json(response)
        }
    });
});

router.post('/api/register', function(req, res){
    db.users.create(req.body).then(function(response, error){
        if(error) {
            
        } else {
            // console.log(response)
            res.json(response)
        }
    })
})

//user sign in function. Grabs
router.post("/api/login", function(req,res){
    console.log(req.body)
	db.users.findAll({where:{username:req.body.username}}).then(function(response, error){
        
		if(req.body.password === response[0].password && !error){
			res.json(response);
		}
		else{
		res.json({error:error})
		}
    })
})

router.post('/api/savedRecipes', function(req, res){
    
    db.saved_recipes.create(req.body).then(function(res){
        console.log(res);
    });

})
module.exports = router