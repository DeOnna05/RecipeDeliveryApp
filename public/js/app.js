let globalCurrentUser = 1;
//Getting document ready for side nav trigger
$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.modal').modal();
});

//function shows all recipes in database
const viewAll = function (event) {
    event.preventDefault();
    //get call
    $.ajax({
        url: '/api/recipes',
        method: 'GET',

    }).then(function (response) {
        //for loop, add each object individually to div without overriding
        for (let i = 0; i < response.length; i++) {
            let data = response[i];
            let price = data.price;
            console.log(price)
            let category = data.category;
            let description = data.description;
            let directionsList = createDirectionsList(JSON.parse(data.directions));
            let id = data.id;
            let image = data.image;
            let ingredientsList = createIngredientList(JSON.parse(data.ingredients));
            let recipe_name = data.recipe_name;
            //clear un-needed html using .empty on the container holding elements to be cleared
            $("#recipe_view").append(
                `<div class="card large hoverable col s12 m6 l4">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="image activator" src="${image}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4" id="recipe_name">${recipe_name}</span>
                <p class="description">${description}</p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4 recipe_name"><h4>${recipe_name}</h4><i class="material-icons right">close</i></span>
                <h6>Servings: 4 | Price: $<span class="price">${price}</span></h6>
                
                <h5>Ingredients</h5>
                <div class="ingredients" >${ingredientsList}</div>
                <h5>Directions</h5>
                <div class="directions">${directionsList}</div>
            </div>
            <div class="card-action">
                <span class="activator teal-text waves-effect waves-teal">VIEW RECIPE DETAILS</span>
                <a href="/" data-id="${id}" data-price="${price}" id="card_link" class="teal-text  waves-effect waves-teal">Add to My Recipes</a>
            </div>
            </div>`)

            $(window).scrollTop($('#card_view').offset().top);
        }
    });
}

// uses for each loop to loop through ingredient array and creates list with bullet points
function createIngredientList(list) {
    let html = '<ol class="bullet-points">'
    list.forEach(e => {
        html += `<li>${e} </li>`
    });
   html += '</ol>'
  return html
}

//uses for each to loop through the directions array and create an ordered list
function createDirectionsList(list) {
    let html = '<ol>'
    list.forEach(e => {
        html += `<li>${e} </li>`
    });
   html += '</ol>'
  return html
}

//Ajax call to search by category
$('.search_button').on('click', function(event){
    event.preventDefault();
    let categoryId = $(this).data("category")
    console.log(categoryId)
    $.ajax({
        url: '/api/search/' + categoryId,
        method: 'GET',
    }).then(function(response){
        console.log(response)
        $("#recipe_view").empty();
         //for loop, add each object individually to div without overriding
         for (let i = 0; i < response.length; i++) {
            let data = response[i];
            let category = data.category;
            let description = data.description;
            let directionsList = createDirectionsList(JSON.parse(data.directions));
            let id = data.id;
            let image = data.image;
            let ingredientsList = createIngredientList(JSON.parse(data.ingredients));
            let recipe_name = data.recipe_name;
            let price = data.price;
            console.log(price)
           
            $("#recipe_view").append(
                `<div class="card large hoverable col s12 m6 l4">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="image" class="activator" src="${image}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4" id="recipe_name">${recipe_name}</span>
                <p class="description">${description}</p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4 recipe_name"><h4>${recipe_name}</h4><i class="material-icons right">close</i></span>
                <h6>Servings: 4 | Price: $<span class="price">${price}</span></h6>
                <h5>Ingredients</h5>
                <div class="ingredients" >${ingredientsList}</div>
                <h5>Directions</h5>
                <div class="directions">${directionsList}</div>
            </div>
            <div class="card-action">
                <span class="activator teal-text waves-effect waves-teal">VIEW RECIPE DETAILS</span>
                <a href="/" data-id="${id}" data-price="${price}" id="card_link" class="teal-text  waves-effect waves-teal">Add to My Recipes</a>
            </div>
            </div>`)

            $(window).scrollTop($('#card_view').offset().top);
        }        
    })
});

//function grabs recipe id and sends back recipe name, ingredients and id to be added to user table
$("#recipe_view").on("click", "#card_link", function (event) {
    event.preventDefault();
    let recipeId = $(this).data("id");
    console.log(recipeId)
    // $.ajax({
    //     url: "/api/recipes/" + recipeId,
    //     method: "POST",
    //     data: {
    //         recipe_name: $('.recipe_name').text(),
    //         ingredients: $('.ingredients').text(),
    //         price: $(this).data("price")
    //     }
    // }).then(function (response) {
        
    //     console.log(response)
    // })

    $.ajax({
            url: "/api/savedRecipes",
            method: "POST",
            data: {
                userId:  globalCurrentUser ,
                recipeId: recipeId
               
            }
        }).then(function (response) {
            
            console.log(response)
        })


   
})

// display users recipes in My Recipes screen
    $(".view_my_recipes").on("click", function (event) {
        event.preventDefault();
        console.log('CLICKED')
        $.ajax({
            url: "/api/users/myRecipes",
            method: "GET",
        }).then(function (response) {
           
           let recipeName = response[0].recipe_name
           let ingredients = response[0].ingredients
           let ingredientsList = ingredients.split('","')
           let price = response[0].price
           let recipeList = recipeName.split('close')
           console.log(recipeList)
           $('.modal-content').empty();
           for(let i=0; i<ingredientsList.length; i++){
               $('.modal-content-review').append(
                   `<ul>
                    <li>
                    <p>
                        <label>
                        <input type="checkbox" class="filled-in" checked="checked"/>
                        <span>${ingredientsList[i]}</span>
                        </label>
                        </p>
                    </li>
                 </ul>
                 `
               )
           }
        })

    });

    $('.register').on('click', function(event){
        event.preventDefault();
        $.ajax({
            url: "/api/register",
            method: "POST",
            data: {
                firstName: $('#first_name').val(),
                lastName: $('#last_name').val(),
                userName: $('#new_username').val(),
                password: $('.password').val()
            }
        }).then(function(response){
            console.log(response)
            //save response.id or response[0].id in a global variable
            // newUser = response[0].id;
            // console.log(newUser)
            $('#sign_up_link').empty();
        })
    })
    
    $("#login_button").on("click",function(event){
        event.preventDefault();
        let user = {
        username:$("#username").val(),
        password:$("#password").val()
    }
    console.log(user)
    $.ajax({
    url:"/api/login",
    method:"POST",
    data:user
    }).then(function(response){
        // console.log(response)
        $('#sign_up_link').empty();
        $('#sign_in_link').empty();
        
       globalCurrentUser = response[0].id
       console.log("GLOBAL CURRENT USERS", globalCurrentUser)
        // console.log(globalCurrentUser)
    })
});

//LISTENERS
//displays all recipes when button is clicked 
$('.view_link').on('click', viewAll);

