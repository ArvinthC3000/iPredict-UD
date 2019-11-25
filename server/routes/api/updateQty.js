const express = require('express')
const router = express.Router();
const bcrypt =  require('bcryptjs')

// User model
const User = require('../../models/user')

// @route   POST api/update/qty
// @desc    Update item route
// @access  Public
router.post('/qty',(req,res) => {
    const {itemID, addContent} = req.body
    console.log(itemID, addContent)
    User.findOneAndUpdate({itemID},{$set:{qty:addContent}},(err,res)=>{
        if(err) return console.log(err)
        console.log("Successful")
        res.json("successfull")
    })
    .then(item =>{
        if(!item){
            console.log("Item id doesn't exists")
            res.json("Item ID doesn't doesn't exists")
        }
        console.log(item)
        res.json(item)

    })
})

module.exports = router; 