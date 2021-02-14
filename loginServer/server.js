const mongoose= require('mongoose');
const express = require('express');
const app =express();
const bodyParser = require ('body-parser');
const ejs = require("ejs");
const path = require('path');



app.use(bodyParser.urlencoded({ extended : true}))
app.set('view engine','ejs');

const db = mongoose.connect('mongodb://localhost/LoginDB',{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}) 

let User = require('./model/Users');
app.use('/css',express.static(path.resolve(__dirname,"ASS/css")))
app.use('/img',express.static(path.resolve(__dirname,"ASS/img")))

app.get('/',(req,res)=>{
    res.render("index");
    
})
app.get('/register',(req,res)=>{
    res.render("register");
    
})
app.get('/login',(req,res)=>{
    res.render("login");
    
})

app.post('/register', (req,res) =>{
 const UserName = req.body.UserName; 
 const Password = req.body.Password; 
const Address = req.body.Address;
const PhoneNumber = req.body.PhoneNumber;
    
 const NewUser = new User({
  UserName:UserName,
  Password:Password,
  Address : Address, 
  PhoneNumber : PhoneNumber
     });
 NewUser.save(err =>{
        err ? console.log(err) :  res.send("Successfully Created User");
          }); 
});


app.post('/login', (req,res)=>{
    
    const UserName = req.body.UserName;
 const Password = req.body.Password; 

    User.findOne({ UserName : UserName} ,(err,foundResults) => {
          if (err) {
              console.log(err);
          } else {
              if (foundResults.Password== Password){
                  res.send('You Logged In!');
              }  else {
                  res.send('Incorrect UserName or Password')
              }
          }
          
      })   
   
        
        })
    
app.listen(3000,function(){
    
    console.log("Server is running in port 3000");
})
