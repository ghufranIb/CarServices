const mongoose= require('mongoose');
const express = require('express');
const bodyParser = require ('body-parser');

const db = mongoose.connect('mongodb://localhost/LoginDB',{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}) 



