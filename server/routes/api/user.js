const express = require('express')
const router = express.Router();
const bcrypt =  require('bcryptjs')

// User model
const User = require('../../models/user')

// Insert handler

// @route   POST api/user/add
// @desc    Adding item 
// @access  Public
router.post('/add',(req,res)=>{
    const {itemName, category, qty, rate, itemID} = req.body
    User.findOne({itemID: itemID})
    .then(item => {
        if(item){
            console.log("Item with same itemID already exists")
        } else {
            const newUser = new User({
                itemName,
                category,
                qty,
                rate,
                itemID
            })
            newUser.save()
            .then(data =>console.log('Successfully included'))
            .catch(err => console.log(err))
        }
    })
})


module.exports = router; 