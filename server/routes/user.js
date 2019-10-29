const express = require('express')
const router = express.Router();
const bcrypt =  require('bcryptjs')

// User model
const User = require('../models/User')

// Register handler
router.post('/register',(req,res)=> {
    const{ name, email, password, password2 } = req.body
    let errors = [];

    // Check required field
    if(!name || !email || !password || !password2){
        errors.push({ msg: 'Please fill in all fields'})
    }

    // Check password match
    if(password!== password2){
        errors.push({ msg: 'Passwords do not match'})
    }

    // Check pass length
    if(password2.length < 6){
        errors.push({msg: 'Password should be atleast 6 characters'})
    }

    if(errors.length >0){
        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        // Validation passed
        User.findOne({ email: email})
        .then(user => {
            if(user){
                // User exsists
                errors.push({ msg: 'Email is already registered'})
                res.render('register',{
                    errors,
                    name,
                    email,
                    password,
                    password2
                })
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                })

                // Hash password
                bcrypt.genSalt(10, (err, salt)=>
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        if(err) throw err;
                        // Set password to hashed
                        newUser.password = hash 
                        // Save new user to db
                        newUser.save()
                        .then(user =>{
                            res.redirect('/login')
                        })
                        .catch(err => console.log(err))
                    }))

                // Save new user to database
                res.send('hello')
            }
        })
    }
})

module.exports = router; 