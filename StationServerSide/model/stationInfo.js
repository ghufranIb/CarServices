const mongoose = require('mongoose');

let schema = mongoose.Schema;

let stationInfo = new schema ({
  CustmerName: String,
  Break : Number,
     datetime : {type: Date , default:Date.now}
})

module.exports = mongoose.model('StationInfo',stationInfo)