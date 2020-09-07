const express = require('express')

const app = express();

//Import routes 
const authRoute = require('./server/Routes/auth')


const mongoose = require('mongoose')

const dotenv = require('dotenv')



const bodyParser = require('body-parser')


dotenv.config()
app.use(express.json())
app.use(bodyParser.json())

//connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true, 
  useUnifiedTopology: true  },
()=>{console.log('connected to db'),
{}})

//middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json());


app.get('/regist',(req,res)=>{
  res.send('hello')
})
app.get('/',(req,res)=>{
  res.send('home page')
})

//Route middleware
app.use('/api/user', authRoute)


app.listen(3001,()=>{
  console.log("up and running on port 3001")
})