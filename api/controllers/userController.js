const bcrypt = require('bcrypt')
const User = require("../models/userModel")

//GET USERS
exports.list_all_users =  async (req,res) => {
    const users = await User.find()
    res.send(users)

};

//GET USER by ID
exports.read_a_user = async (req,res) => {
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).send("user not found")
    res.send(user)
}

//POST USER
exports.enter_a_user = async (req,res) =>{

    let user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send('User already exists')

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password ,salt)

    user = new User({
        name:req.body.name, 
        email: req.body.email,
        password: hashPassword
    })

    const result = await user.save()

    const jwtToken = user.generateJWT();


    res.status(201).header('Authorization', jwtToken).send({
        _id: user._id,
        name: user.name,
        email: user.email
    })
    
}

//PUT USER 

exports.update_a_user = async (req,res) => {

    const user = await User.findByIdAndUpdate( req.params.id,{
        name:req.body.name, 
        email: req.body.email
    },{
        new: true
    })

    if(!user){

        return res.status(404).send('ID does not exist')
    }

    res.status(200).send("User Updated: " + user)
        
}

//DELETE USER

exports.delete_a_user = async (req,res) => {

    const user = await User.findByIdAndDelete(req.params.id)
    if(!user){
        return res.status(404).send('ID does not exist')
    }

    res.status(200).send("User Deleted: " + user)

}
