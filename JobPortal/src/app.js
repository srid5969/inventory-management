const configDb = require('../config/manager.ts')
const express = require('express');
const router=require('./contrller/router')
const mongoose = require('mongoose');
const mongoString = configDb;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.json());
const Userroutes = require('./user/controller/router');
app.use('/demo/user', Userroutes)
const Jobsroutes = require('./job/controller/router');
app.use('/demo/job/', Jobsroutes)
const UserJobrouter = require('./userJobs/controller/router');
app.use('/demo/', UserJobrouter)
app.use('/',router)
app.listen(8080, () => {
    console.log(`Server Started at 8080`)
})
// const emitter = new EventEmitter()
// emitter.setMaxListeners(100)
// const LoggerMiddleware = (req,res,next) =>{
//     console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
//     next();
// }
// app.use(LoggerMiddleware)
// app.use(function(req, res, next){
//     console.log("A new request received at " + Date.now());
    
//     //This function call is very important. It tells that more processing is
//     //required for the current request and is in the next middleware
//     // function route handler.
//     next();
//  });