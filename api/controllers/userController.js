const bcrypt = require('bcrypt')
const User = require("../models/userModel")
const jwt = require('jsonwebtoken')


//GET USERS
exports.list_all_users =  async (req,res) => {
    const users = await User.find()
    console.log(users)
    return res.json(users)

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

    res.status(201).send("User created" + result)
    
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

exports.generateJWT = (name, email, password) => {

    const prueba = {
        name: name,
        email:email,
        password:password
    }

    return jwt.sign({
        data: prueba
    }, process.env.SECRET_KEY_JWT_API, {expiresIn:"1h"})

}


//LOGIN

exports.user_login = async(req,res) => {

    const user = req.body

    const {email, password} = user

    const userFound = await User.findOne({
        email: email
    })
    
    const isEqual = await bcrypt.compare(password,userFound.password)

    if(userFound){
        const jwtToken = await this.generateJWT(userFound.name, userFound.email, userFound.password);

        return res.status(200).send("token:  " + jwtToken)
    }

    return res.status(401).send("error no auth")

}
