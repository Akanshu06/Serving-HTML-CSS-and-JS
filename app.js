const express = require('express');
const app= express();
const adminPage= require('./routes/admin');
const shopPage = require('./routes/shop');
const bodyParser=require('body-parser');
const path = require('path');
const rootDir= require('../revision/util/path');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'publics')))
app.use('/admin',adminPage);
app.use(shopPage);

app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})
app.listen(5000);