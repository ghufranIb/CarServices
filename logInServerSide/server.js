
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");


const ejs = require("ejs");
const path = require('path');


app.use(bodyparser.urlencoded({ extended : true}))
 
app.use(express.static("public"));
app.set('view engine','ejs');



app.use('/css',express.static(path.resolve(__dirname,"ASS/css")))
app.use('/img',express.static(path.resolve(__dirname,"ASS/img")))
app.use('/js',express.static(path.resolve(__dirname,"ASS/js")))
app.use('/ASS',express.static(path.resolve(__dirname,"ASS")))



const db = mongoose.connect('mongodb://localhost/usersDB',{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}) 

let User = require('./models/User')

app.get('/', (req,res)=>{
    
    res.render("index");
        
        })

app.get('/register', (req,res)=>{
    
    res.render("register");
        
        })
app.get('/GoogleMap', (req,res)=>{
    
    res.render("GoogleMap");
        
        })
app.get('/index', (req,res)=>{
    
    res.render("index");
        
        })
app.get('/Station', (req,res)=>{
    
    res.render("Station");
        
        })

app.get('/login', (req,res)=>{
    
    res.render("login");
        
        })
app.get('/services', (req,res)=>{
    
    res.render("services");
        
        })
app.get('/contact', (req,res)=>{
    
    res.render("contact");
        
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
 NewUser.save(function(err,Savedusers){
          if (err) {
              res.status(500).send({error:"error"})
          } else {
              res.send(Savedusers)
          }
          
 });
});
    
              

app.post('/login', (req,res)=>{
    
    const UserName = req.body.UserName;
 const Password = req.body.Password; 

    User.findOne({ UserName : UserName} ,(err,foundResults) => {
          if (err) {
              console.log(err);
          } else {
              if (foundResults.Password == Password){
                  res.send('You Logged In!')
              }  else {
                  res.send('Incorrect UserName or Password')
              }
          }
          
      })   
   
        
        })


app.listen(8000,function(){
    
    console.log("Server is running in port 8000");
})