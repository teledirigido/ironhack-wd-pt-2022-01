const User = require('./models/User');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exampleApp');
// When successfully connected
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
// If the connection throws an error
mongoose.connection.on('error', err => console.log(`Mongoose default connection error: ${err}`));
// When the connection is disconnected
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close().then(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

function createUser() {
  const data = {
    name: 'Alice',
    password: 'ironhack2018',
    job: 'Architect'
  };
  User.create(data)
    .then(user => console.log('The user is saved and its value is: ', user))
    .catch(error => console.log('An error happened while saving a new user:', error));
}

/**
 * Update a user v1
 *
**/
function updateUserV1() {
  /**
   * @method updateOne
   * @param object $filter
   * @param object $update
   **/
  User.updateOne({ name: 'Alice' }, { job: 'Ironhack Student' })
    .then( user => {
      console.log(user);
  });
}

/**
 * Update a user v2
**/
function updateUserV2() {
  /**
   * @method findById
   * @param string document ID
  **/
  User.findById('642c05bcadf2b1059fc9e757')
    .then(user => {
      user.job = 'Developer';
      user.age = 32;
      user.salary += 10000;
      return user.save();
    })
    .then(user => console.log('The user was updated: ' + user))
    .catch(err => console.log('An error occurred:', err));
}

updateUserV2();
