const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const User = require("../models/userModel")


const auth = (req,res,next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY_JWT_API);
    
        const userFound = User.findOne({
            email: decodedToken.data.email
        })
    
        if(userFound === null){
            return res.status(401).send("invalid token provided")
        } 
            
        next() 
            
    } catch (error) {
        res.status(401).json({error: ` token not provided`})
    }
    
}

module.exports = {auth};