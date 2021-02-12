const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true})); 

app.set("view engine", "ejs")
app.use('/css',express.static(path.resolve(__dirname,"ASS/css")))
app.use('/img',express.static(path.resolve(__dirname,"ASS/img")))
app.use('/js',express.static(path.resolve(__dirname,"ASS/js")))

app.use('/', require('./server/routes/router'))


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",  "*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods","*"
  );
  next();
});
const db = mongoose.connect('mongodb://localhost/StationInfoDB',{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}) 


app.listen(8000,function(){
    
    console.log("Server is running in port 8000");
})