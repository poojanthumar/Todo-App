const express = require('express');
const port = 8000;
const dp = require('./config/mongoose');
const Task = require('./models/tasks');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/', require('./router/routerindex'));

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