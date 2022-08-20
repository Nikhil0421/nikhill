const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rutujagaikwad:StartLazaa2022@cluster0.rcmoqkb.mongodb.net/test').then(()=>{
    console.log('connection successful');
}).catch((err)=>{
    console.log(err);
})