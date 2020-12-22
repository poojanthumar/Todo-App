const express = require('express');
const port = 8000;

const app = express();
app.listen(port, (err) => {
    if(err)
    {
        console.log("Error");
    }
    else
    {
        console.log("Server Set Up! Yoohoo");
    }
})