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
        type: Number,
        required: true
    },
    rate: {
        type: Number,
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

const User =  mongoose.model('userobjs', UserSchema)

module.exports = User