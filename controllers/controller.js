module.exports.home = function(req,res) {
    return res.render('home',{
        title: "To-do List",
        task_list: [
            {
                description: "Complete Project",
                category: "Work",
                deadline: "2021-07-09"
            },
            {
                description: "Also complete project",
                category: "Important",
                deadline: "2021-07-08"
            },
            {
                description: "Also also complete project",
                category: "Official",    
                deadline: "2021-02-09"
            }
        ],
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
}