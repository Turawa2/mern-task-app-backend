const Task = require("../Models/taskModel");

//create a task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}

//get a task
const getTasks = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}

//get a single task
const getTask = async (req, res) => {
   try {
   const {id} = req.params;
    const task = await Task.findById(id)
    if(!task){
        return res.status(404).json(`NO TASK FOUND ${id}`)
    }
    res.status(200).json(task)
   } catch (error) {
    res.status(500).json({ msg: error.message });
    
   }
};

//delete task
const deleteTask = async (req, res) => {
  try {
   const {id} = req.params;
    const task = await Task.findByIdAndDelete(id)
    if(!task){
        return res.status(404).json(`NO TASK FOUND ${id}`)
    }
    res.status(200).send("Task Deleted")
  } catch (error) {
    res.status(500).json({ msg: error.message });
    
  }
 };

 //update task
const updateTask = async (req, res) => {
    try {
     const {id} = req.params;
      const task = await Task.findByIdAndUpdate(
        {_id: id}, req.body, {new: true,  runValidators: true},
      )
      if(!task){
          return res.status(404).json(`NO TASK FOUND ${id}`)
      }
      res.status(200).send("Task Updated!")
    } catch (error) {
      res.status(500).json({ msg: error.message });
      
    }
   }


//exprt them
module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}