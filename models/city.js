const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String },
  image: { type: String },
  dressCode: { type: String },
  lat: { type: Number },
  lng: { type: Number }
});

module.exports = mongoose.model('City', citySchema);
