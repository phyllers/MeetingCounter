// The Meeting model
 
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var meetingSchema = new Schema({
    name: String,
    cost: Number,
    endDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Meeting', meetingSchema);