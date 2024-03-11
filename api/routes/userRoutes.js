const express = require("express");
const router = express.Router();
const user = require("../controllers/userController")
const auth = require("../middlewares/authJWT")

router
    .get("/",[auth], user.list_all_users)
    .get("/user/:id", user.read_a_user)

    
router
    .post("/", user.enter_a_user)
    .put("/user/:id", user.update_a_user) 
    .delete("/user/:id", user.delete_a_user);

router
    .post("/userLogin", user.user_login)

module.exports = router

