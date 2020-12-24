const Task = require("../models/tasks");
module.exports.home = function(req,res) {

    Task.find({} , function(err,tasks){
        if(err)
        {
            console.log("Error in Fetching from DB");
        }
        return res.render('home',{
            title: "To-do List",
            task_list: tasks,
            month:{
                    "01": "Jan",
                    "02": "Feb",
                    "03": "Mar",
                    "04": "Apr",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "Aug",
                    "09": "Sept",
                    "10": "Oct",
                    "11": "Nov",
                    "12": "Dec",
                }
        });
    })
    
}

module.exports.newtask = function(req, res){
    Task.create(
        {
            description: req.body.description,
            category: req.body.category,
            deadline: req.body.deadline
        },
        function(err, newTask){
            if(err)
            {
                console.log("Error in Populating DB");
            }
            return res.redirect('back');
        }
    )
};

module.exports.deletetask = function(req, res){
    Task.findByIdAndDelete(req.query.id, function(err){
        if(err)
        {
            console.log("Error in Deleting Task");
        }
        return res.redirect('back');
    });
};