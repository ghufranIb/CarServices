const mongoose = require('mongoose');

const Msg = require('./models/messages');
const io = require('socket.io')(4000)

const db= 
mongoose.connect('mongoDB://localhost/ChatDB', { 
    
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
  

