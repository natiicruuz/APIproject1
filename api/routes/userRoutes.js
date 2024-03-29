const express = require("express");
const router = express.Router();
const user = require("../controllers/userController")
const {auth} = require("../middlewares/authMiddleware")

router
    .get("/",[auth], user.list_all_users)
    .get("/user/:id",[auth], user.read_a_user)

    
router
    .post("/",[auth], user.enter_a_user)
    .put("/user/:id",[auth], user.update_a_user) 
    .delete("/user/:id",[auth], user.delete_a_user);

router
    .post("/userLogin", user.user_login)

module.exports = router

