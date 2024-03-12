const express = require('express');
<<<<<<< HEAD
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
=======
const bodyParser = require('body-parser');
const loginPage = require('./routes/login.js');
const messagePage = require('./routes/message');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/user', loginPage);
//app.use('/main',(req,res)=>{
//    res.send('its a main page')
// })
app.use('/main',messagePage);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
>>>>>>> 2b8a6e37aac35b29a47a5d7cf10c078f30ac6a04
