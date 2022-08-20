// const express = require('express');
// var http = require('http');
// var fs = require('fs');
// const app = express();

var http = require('http');
var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.open('text1.txt', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/txt'});
//     res.write(data);
//     console.log(data)
//     return res.end();
//   });
// }).listen(8080);

// create file
// fs.writeFile('mynewfile2.txt', 'Hello world To rename a file with the File System module,  use the fs.rename() method.The method renames the specified file:', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// })

// rename file
// fs.rename('mynewfile21.txt', 'mynewfile1.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// })

// delete file
// fs.unlink('mynewfile1.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// })
// const names = ['Deva','Haja','Nikhil','Mayur','Sriram','Shiva','Pratik']
// // console.log('Array',names);
// names.forEach(element => {
//     const result = element;
//     console.log(result)
// });

// update file
const abc = "hhhhhhhhh jhhhhhhhhhhh dddddddd yh wwwwwwwww"
fs.appendFile('text.txt', `${abc}`, function (err) {
  if (err) throw err;
  console.log('Updated!');
})


// console.log('..................',result)
// console.log("result.........>",result);

// function add(a,b){
//     console.log(a+b);
// }
// add(3,2)

// const add = function(a,b){
//     console.log(a+b)
// }
// add(5,5)

// let add = (a,b) =>(a+b)

// console.log(add(6,6))

// const add = (a,b) =>{
//     if(a<b)
//         return'a is greater'
//     else   
//         return 'b is greater'
// }
// console.log(add(4,5))\

// for(i=0;i<5+1;i++){
//     if(i>2){
//         console.log("*");
//         // break;
//     }
//  }

// hey = "hello"
// let ram;
// console.log(hey)

// http.createServer(function (req, res) {
//   fs.readFile('text.txt', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/txt'});
//     console.log(data)
//     res.write(data);
//     return res.end();
//   });
// });


// app.listen(3000, ()=>{
//     console.log('listen port on 3000')
// })