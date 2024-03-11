const Task = require("../models/taskModel")

//GET TASKS
exports.list_all_tasks =  async (req,res) => {
    const tasks = await Task.find()
    res.send(tasks)

};

//GET TASK by ID
exports.read_a_task = async (req,res) => {
    const task = await Task.findById(req.params.id)
    if(!task) return res.status(404).send("task not found")
    res.send(task)
}

//POST TASK 
exports.create_a_task = async (req,res) =>{

    let task = await Task.findOne({taskName: req.body.taskName})
    if(task) return res.status(400).send('Task already exists')

    task = new Task({
        taskName:req.body.taskName, 
        description: req.body.description,
        priority: req.body.priority
    })

    const result = await task.save() 
    res.status(200).send("Task Created: " + task)

    
}

//PUT TASK 

exports.update_a_task = async (req,res) => {

    const task = await Task.findByIdAndUpdate(req.params.id,{
        taskName:req.body.taskName, 
        description: req.body.description,
        priority: req.body.priority
    },{
        new: true
    })

    if(!task){
        return res.status(404).send('ID does not exist')
    }

    res.status(200).send("Task Updated: " + task)
        
}

//DELETE TASK

exports.delete_a_task = async (req,res) => {

    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task){
        return res.status(404).send('ID does not exist')
    }

    res.status(200).send("Task Deleted: " + task)

}
