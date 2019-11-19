const express = require('express')
const router = express.Router();
const bcrypt =  require('bcryptjs')

// User model
const User = require('../../models/user')

// @route   POST api/update
// @desc    Update item route
// @access  Public
router.post('/',(req,res) => {
    const {itemID} = req.body
    User.find({itemID}).select({'itemName':1, "_id":0, "previousData":1, "qty":1 , "itemID":1, "category":1 })
    .then(item =>{
        if(!item){
            console.log("Item id doesn't exists")
            res.json("Item ID doesn't doesn't exists")
        }
        console.log(item)
        res.json(item)

    })
})

// @route   POST api/update/qty
// @desc    Update item route
// @access  Public
router.post('/qty',(req,res) => {
    const {itemID} = req.body
    User.find({itemID}).select({'itemName':1, "_id":0, "previousData":1, "qty":1 , "itemID":1, "category":1 })
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