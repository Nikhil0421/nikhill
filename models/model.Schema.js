const express = require('express');
const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your first name"]
    }, 
    age : Number,
    email:{
        type:String,
        required:[true,"please enter email id"]
    },
})


module.exports = mongoose.model('dataSend',dataSchema);
