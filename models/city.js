const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String },
  image: { type: String },
  showImage: { type: String },
  dressCode: { type: String },
  categoryId: { type: String },
  lat: { type: Number },
  lng: { type: Number }
});

citySchema
  .virtual('cityQuery')
  .get(function getCityQuery() {
    return this.name.toLowerCase().replace(' ', '-');
  });

module.exports = mongoose.model('City', citySchema);
