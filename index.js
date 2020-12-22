const express = require('express');
const port = 8000;

const app = express();

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