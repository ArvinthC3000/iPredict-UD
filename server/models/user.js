const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    qty: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    itemID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const User =  mongoose.model('UserObjs', UserSchema)

module.exports = User