const express = require('express')
const router = express.Router();
const bcrypt =  require('bcryptjs')
// User model
const User = require('../../models/user')

router.get('/',(req,res)=>{
    User.find({}).select({'itemName':1, "_id":0, "previousData":1, "qty":1 , "itemID":1 })
    .then(item => {
        if(!item) return console.error(err);
        let respondString = [];
        const data = JSON.parse(JSON.stringify(item));
        const size = data.length 
        let temp = 0;
        for(i=0;i<size;i++){
            let arrayLength = data[i].previousData.length
            // console.log(data);
            console.log(data[i].qty,data[i].previousData[arrayLength-1]);
            if(data[i].qty < data[i].previousData[arrayLength-1]){
                temp++
                // console.log("here"+data[i])
                respondString.push(data[i])
            }
            
        }
        console.log(respondString)
        res.json(respondString);

        
    })
})


module.exports = router; 