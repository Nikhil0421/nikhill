const express = require('express');
const router = express.Router();
const dataSend = require('../models/model.Schema');
const sendMail = require('../send_mail/notifymail');
// const nodeCron = require('../send_mail/send.email');

router.post('/add', async(req,res)=>{
    try {
        const data = dataSend(req.body);
        const result = await data.save();
        res.send(result)
    } catch (error) {
        res.send(error);
    }
})

router.get('/getAll', async(req,res) =>{
    try {
        const data = await dataSend.find({});

        const filter = { age: { $gte: 35 } };
        let docs = await dataSend.aggregate([{ $match: filter }]);
        console.log(docs)
       
    //     arrya1 = []
    //     data.forEach(element => {
    //         let a=element.age
    //         if (a==30){
    //             arrya1.push(a)
    //         }
    //         // console.log(a)
    //     });
    //     // console.log("mmmmmmmmmmmmmm",arrya1[0])
        

    //     const filter = { age: { $gte: 24 } };
    //     // console.log("//////////////",filter)
    //     let docs = await dataSend.aggregate([
    //       { $match: filter }
    //     ]);
    // //    if (arrya1[0]==docs[0].age){
    // //     console.log("?????????????yes")
    // //    }else{
    // //     console.log("dddddddddddddd no")
    // //    }
    //     console.log("<<<<<<<<<<<<<<<<<",docs)
    //     console.log("<<<<<<<<<<<<<<<<<",docs[1].age)
    //     console.log("<<<<<<<<<<<<<<<<<",docs[2].age)

       
    //     // console.log('>>>>>>>>>>>>>>>',docs)

        
          
    //     //   let sum=docs.length; // 4
    //     //   console.log("=============",sum)
    //     //   const a=docs.sort((d1, d2) => d1._id - d2._id);
    //     //   console.log('aaaaaaaaaaaaaaaaaaa',a)
    //     //   console.log("0000000000000", docs[0]); // { _id: 24, count: 1 }
    //     //   console.log("1111111111111111", docs[1]); // { _id: 28, count: 1 }
    //     //   console.log("22222222222", docs[2]); // { _id: 29, count: 2 }
    //     //   console.log("333333333333333", docs[3]);
    //     //   console.log(">>>>>>>>>>>>>>>>>>>>",docs)
        // console.log(data)
        res.send(data)
    } catch (error) {
        res.send(error);
    }
})

router.get('/getBy/:id', async(req,res) =>{
    try {
        const data = await dataSend.findById(req.params.id);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/sendMail', async(req,res) =>{
    try {
        const data = sendMail.sendMail(req.body);
        res.send(data);
        console.log(data)
    } catch (error) {
        res.send(error);
    }
})

router.put('/update/:id', async(req,res) =>{
    try {
        const data = await dataSend.findByIdAndUpdate(req.params.id, req.body);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

router.delete('/delete/:id', async(req,res)=>{
    try {
        const data = await dataSend.findByIdAndDelete(req.params.id);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

router.delete('/deleteAll', async(req,res) =>{
    try {
        const data = await dataSend.deleteMany();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})
module.exports = router;