const express = require('express');
const dataSend = require('./models/model.Schema');
const router = require('./router/router');

require('./db/conn');

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Connection successfull ${port}`);
})