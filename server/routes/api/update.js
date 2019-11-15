const express = require('express')
const router = express.Router();
const bcrypt =  require('bcryptjs')

// User model
const User = require('../../models/user')


router.post('/',(req,res) => {
    const {itemID} = req.body
    User.updateOne({itemID},{
        $set: {qty:15}
    }, (err,results)=>{
        console.log(results.result)
    })
    
})


module.exports = router; 