const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

async function auth (req,res,next){


    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY_JWT_API);

        const userFound = await User.findOne({
            email: decodedToken.data.email
        })

        if(userFound === null){
            return res.status(401).send("invalid token")
        } 
        
        next() 
        
    } catch (error) {
        res.send(error)
    }


}

module.exports = auth