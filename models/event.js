const mongoose = require('mongoose')
const Schema = mongoose.Schema
//admin, region, name, location, date, begin, end, amount, description 
const EventSchema = new Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  region: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String, 
    required: true
  },
  begin: {
    type: Number,
    required: true
  },
  end: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
});

// Creating a table within database with the defined schema
const Event = mongoose.model('Event', EventSchema);

// Exporting table for querying and mutating
module.exports = Event;