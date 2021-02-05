const mongoose = require('mongoose')

let schema =  mongoose.Schema;

let Userdb = new schema({
    name :
    {
        type :String,
          require:true,
        async: true
        
    },
    Break :
    {
        type:Date ,
        default:Date.now,
       require:true
    },
    gender :String,
    
    status :String
})

module.exports = mongoose.model ('Userdb',Userdb);
