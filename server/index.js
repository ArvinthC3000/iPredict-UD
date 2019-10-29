const express = require('express')
const mongoose = require('mongoose')

const app =  express();
const PORT = 3001

// DB config

const db = require('./config/key').url

// Connect to mongoDB

mongoose.connect(db, { useNewUrlParser:true, useUnifiedTopology: true })
.then(()=> console.log('MongoDB connected...'))
.catch(err=>console.log(err))

// Bodyparser 

app.use(express.urlencoded({ extended:true }))

app.listen(PORT, console.log('Server is listening at port '+PORT))

// Routes

