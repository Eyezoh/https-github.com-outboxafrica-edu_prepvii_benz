const express = require('express');

const app = express();

const bodyParser = require('body-parser')

//import routes

const authRoute = require('./src/server/Routes/auth')


//import middleware


require('dotenv/config')
require ('dotenv/config')

app.get('/post',(req,res)=>{
    res.send('posters page')
})
app.use('/poster',(req,res)=>{
    res.send('posters page')
})


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, 
     useUnifiedTopology: true },()=>{
    console.log('Connected to Db')
})

app.listen(3000, ()=> console.log('Now listening on port 3000'));