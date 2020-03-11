const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true,
    unique: true
  },
  long: {
    type: Number,
    required: true
  },
  creation_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Place = mongoose.model("place", PlaceSchema);
