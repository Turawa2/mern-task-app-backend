const express = require("express");
const Task = require("../Models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskControllers");
const router = express.Router();


//another way to create routes in common 
//route with same / 
// router.route("/").post(createTask).get(getTasks);
// routes with same /:id
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);


//routes
// Create a task
router.post("/", createTask);
  //get tasks
router.get("/", getTasks);
  //get single task
  router.get("/:id", getTask);
//delete a task
router.delete("/:id", deleteTask);
//update a task
router.put("/:id", updateTask);


module.exports = router;