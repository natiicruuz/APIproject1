const express = require("express");
const router = express.Router();
const User = require("../models/userModel")

//Routes

/*
router.get("/users", async (req,res) =>{
    const users = await User.find()
    res.send(users)
})

.get("/user/:id", async(req,res)=>{
    const user = await User.findById(id, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log("Result : ", docs);
        }
    })
})


.post("/users", nameList.enter_a_name);

router
  .get("/names/:nameId", nameList.read_a_name)
  .put("/names/:nameId", nameList.update_a_name)
  .delete("/names/:nameId", nameList.delete_a_name);
*/