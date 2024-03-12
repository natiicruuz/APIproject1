const express = require("express");
const router = express.Router();
const task = require("../controllers/taskController")
const {auth} = require("../middlewares/authMiddleware")

router
    .get("/",[auth], task.list_all_tasks)
    .get("/task/:id",[auth], task.read_a_task)

router
    .post("/",[auth], task.create_a_task)
    .put("/task/:id",[auth], task.update_a_task)
    .delete("/task/:id",[auth], task.delete_a_task);

module.exports = router 