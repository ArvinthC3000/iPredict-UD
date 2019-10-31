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

// app.use('/', console.log("welcome"))
app.use('/api/user',require('./routes/api/user'))
// app.use('/api/datacenter',require('./routes/api/datacenter'))


app.listen(PORT, console.log('Server is listening at port '+PORT))

// Routes


