const express = require('express')
const router = express.Router();
const bcrypt =  require('bcryptjs')
// User model
const User = require('../../models/user')

router.get('/',(req,res)=>{
    User.find({ qty: { $lte: 12 } })
    .then(item =>{
        if(!item)
            return res.status(404).json( "no item at critical level" );
        res.json(item)
    })
})


module.exports = router; 