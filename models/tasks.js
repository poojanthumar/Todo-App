const mongoose = require("mongoose");

//Creating Schema for storing Database
const taskSchema = new mongoose.Schema ({
    description : {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    }
})

//Creating a model of that schema
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;