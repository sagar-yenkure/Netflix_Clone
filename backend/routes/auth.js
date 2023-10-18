const express = require('express');
const router = express.Router();
const User=require("../models/user")
const {body,validationResult}=require("express-validator")
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_KEY ="2104sagar"


// Route 1 : creating a new user 

router.post('/createuser',[
    body('email','invalid mail id').isEmail(),
    body('password','password is weak').isLength({min:6}),  
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    try {
        // cheakes where email id already exists
        let user = await User.findOne({ email: req.body.email });
        
        if (user) { 
            success=false; // if user email  already exists then error
            return res.status(400).json({  success, error: "User with this Email ID alredy exits, Please Login" })
        }
        // creating a salt for password and creating a hash of passwords
        const salt = await bcrypt.genSalt(10);
        const Pass = await bcrypt.hash(req.body.password, salt);

        // if not exists then craete a user
        user = await User.create({
            email: req.body.email,
            password: Pass,
        })
        const data = {   //!created the token witch contain the data of user id of mongoDB and the secret kay of administrator.  
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, JWT_KEY)
        console.log(token)
        success=true;
        res.json({  success, token })
    }
    catch (error) { // cathches error in above code
        success=false
        res.status(500).send("some problem accured in sign up")
        console.log(error)

    }
})





module.exports = router
