const express = require('express');
const port = 8000;

//Importing Database
const dp = require('./config/mongoose');
const Task = require('./models/tasks');

//Firing Up Server
const app = express();

//Setting EJS as view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//middleware encoding
app.use(express.urlencoded());
app.use(express.static('assets'));

//routing all / calls to router index
app.use('/', require('./router/routerindex'));


//Server setup
app.listen(port, (err) => {
    if(err)
    {
        console.log("Errors");
    }
    else
    {
        console.log("Server Set Up! Yoohoo");
    }
})