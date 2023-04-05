const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Creating a new schema
 * @field timestamps adds 2 extra-fields to our schema: createdAt and updatedAt (of type Date)
**/
const userSchema = new Schema({
    name: String,
    password: String,
    job: String,
    age: {
      type: Number,
      min: 16
    }
  }, {
    timestamps: true
});

/**
 * Creating a new model User
 **/
const User = mongoose.model('User', userSchema);

module.exports = User;
