const mongoose = require('mongoose')

const newItem = new mongoose.Schema({
    Item: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    qty: {
        type: Number
    },
    rate: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const User =  mongoose.model('UserObj', newItem)

module.exports = UserObject 