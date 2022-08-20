const express = require('express');
const mongoose = require('mongoose');
const recruite = new mongoose.Schema({
    company_type: {
        type:String,
        required:true
    },
    company_name: {
        type:String,
        required: false
    },
    country:{
        type:String,
        required:false
    },
    state:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    first_name:{
        type:String,
        required:[true,"Please enter your first name"]
    },
    last_name:{
        type:String,
        required:[true,"Please enter your last name"]
    },
    email_id:{
        type:String,
        required:false
    },
    phone_no:Number,
    Designation:{
        type:String,
        required:false
    },
    password:{
        type:String,
        reqired:false
    }

})
// const dataSchema = new mongoose.Schema({
//     name:String,
//     age : Number,
//     email:String,
//     personalDetails:{
//         name:{
//             type:String
//         },
//     }
// })


const recruitereSchema = mongoose.model('recruitereSchema',recruitereSchema)