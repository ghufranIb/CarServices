const mongoose = require('mongoose');

let schema = mongoose.Schema;

let users = new schema ({
    UserName :String,
    Password :String,
    Address:String,
    PhoneNumber:Number
    
});

module.exports = mongoose.model('User',users)