const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  color: String,
  age: Number
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
