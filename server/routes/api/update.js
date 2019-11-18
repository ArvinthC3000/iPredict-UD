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
    User.updateOne({itemID},{
        $set: {qty:10}
    }, (err,results)=>{
        console.log(itemID)
    })
    .then(User.findOne({itemID}).then(item => res.json(item)))
    
})


module.exports = router; 