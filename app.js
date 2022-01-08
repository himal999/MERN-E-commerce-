const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');
//app
const app = express();

//routes
app.use("/",userRoutes);

//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
  
}).then(()=>console.log('DB Connected'));


const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server is Running on ${port}`);
});