require("dotenv").config();
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const setCookie = require('cookie-parser')
const authRoute = require('./routes/auth');
const cookieParser = require("cookie-parser");


const port=2020;
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('DB CONNECTED')
}).catch((err)=>{
    console.log(err)
})
app.use(bodyParser())
app.use(cookieParser())
app.use(cors())

app.use('/api',authRoute);



app.listen(process.env.PORT|| port,()=>{
    console.log(`Server up on ${port}`)
})