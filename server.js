//requirements
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const db = require('./models');
// Sets up our server to parse our request body for post/put/delete requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using express and path to find files
app.use(express.static('public'));

//routes
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

app.use(apiRoutes);
app.use(htmlRoutes);


db.sequelize.sync().then(function(){
//server listener
app.listen(PORT, function(){
    console.log(`App is listening on ${PORT}`)
    }) 
});
