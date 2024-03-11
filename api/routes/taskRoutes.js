const express = require("express");
const router = express.Router();
const task = require("../controllers/taskController")

router
    .get("/tasks", task.list_all_tasks)
    .get("/tasks/:id", task.read_a_task)

router
    .post("/tasks", task.create_a_task)
    .put("/tasks/:id", task.update_a_task)
    .delete("/tasks/:id", task.delete_a_task);

module.exports = router