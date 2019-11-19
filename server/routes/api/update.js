const express = require('express')
const router = express.Router();
const bcrypt =  require('bcryptjs')

// User model
const User = require('../../models/user')

// @route   GET api/update
// @desc    Update item route
// @access  Public
router.post('/',(req,res) => {
    const {itemID} = req.body
    console.log(itemID)
    User.find({itemID:itemID})
    .then(item =>{
        if(!item){
            console.log("Item id doesn't exists")
            res.json("Item ID doesn't doesn't exists")
        } else {
            console.log(item)
            res.json(item)
        }

    })
    
})

// router.post('/',(req,res) => {
//     const {itemID} = req.body
//     console.log(itemID)
//     User.updateOne({itemID},{
//         $set: {qty:10}
//     }, (err,results)=>{
//         console.log(itemID)
//     })
//     .then(User.findOne({itemID}).then(item => res.json(item)))
    
// })


module.exports = router; 