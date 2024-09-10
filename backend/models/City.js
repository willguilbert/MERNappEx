
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  country: String,
});

const City = mongoose.model('City', citySchema, process.env.DB_COLL );

module.exports = City;
