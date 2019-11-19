const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app =  express();
const cors = require('cors')
const PORT = 5099;

// DB config

const db = require('./config/key').url

// Connect to mongoDB

mongoose.connect(db, { useNewUrlParser:true, useUnifiedTopology: true })
.then(()=> console.log('MongoDB connected...'))
.catch(err=>console.log(err))

// Bodyparser 

app.use(express.urlencoded({ extended:false }))
app.use(bodyparser.json())
app.use(cors())

// Routes
app.use('/api/user',require('./routes/api/user'))
app.use('/api/predict',require('./routes/api/predict'))
app.use('/api/update',require('./routes/api/update'))

// // Passcode config
// const code = require('./config/code').code
// app.use('/passcode', res.json({0000}))



app.listen(PORT, console.log('Server is listening at port '+PORT))
