const express = require('express');
const router = express.Router();
const User = require("../models/user")
const { body, validationResult } = require("express-validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_KEY = "2104sagar"


// Route 1 : creating a new user 

router.post('/createuser', [
    body('email', 'invalid mail id').isEmail(),
    body('password', 'password is weak').isLength({ min: 6 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
    try {
        const { email, password } = req.body
        // cheakes where email id already exists
        let user = await User.findOne({ email: email });

        if (user) {
            success = false; // if user email  already exists then error
            return res.status(400).json({ success, error: "User with this Email ID alredy exits, Please Login" })
        }
        // creating a salt for password and creating a hash of passwords
        const salt = await bcrypt.genSalt(10);
        const Pass = await bcrypt.hash(password, salt);

        // if not exists then craete a user
        user = await User.create({
            email: email,
            password: Pass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, JWT_KEY)
        console.log(token)
        success = true;
        res.json({ success, token })
    }
    catch (error) {
        success = false
        res.status(500).send("some problem accured in sign up")
        console.log(error)
        res.json("some problem in the server")

    }
})

// router 2 : login the existing user

router.post('/login', [
    body('email', 'invalid email id ').isEmail(),
    body('password', 'invalid email id ').exists()
], async (req, res) => {
    let sucess=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            sucess=false
            return res.status(400).json({
                error: "please try again with correct condentails !"
            })
        }
        const comparepass = await bcrypt.compare(password, user.password)
        if (!comparepass) {
            sucess=false
            return res.status(400).json({ error: "please again try with correct condentails !" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        sucess=true
        const token = jwt.sign(data,JWT_KEY)
        res.json({ sucess ,token})

    } catch (error) {
        res.status(500).send("some problem in server")
    }



})




module.exports = router
