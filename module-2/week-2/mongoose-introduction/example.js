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


/**
 * Model
 * We’re defining a mongoose model called Cat as a constructor function
 * that creates objects with a field of name,
 * that has a type of String.
 *
 * Important
 * 1. The name of the model will always be represented with a capital letter
 * 2. The name is ALWAYS singular
 * 3. The collection is the plural form of the Model and is lowercase
**/
const Cat = mongoose.model('Cat', { name: String });

/**
 * Creating an instance
**/
const kitty = new Cat({ name: 'Ironhacker' });

/**
 * @function addNewCat
 * Saving our kitty into cats collection
 * save() sends a MongoDB insertOne command to the database
**/
function addNewCat(catName) {
  const kitty = new Cat({ name: catName });
  kitty
    .save()
    .then(newCat => console.log(`A new cat is created: ${newCat}!`))
    .catch(err => console.log(`Error while creating a new cat: ${err}`));
}

/**
 * @function ShowCats
 * find() is sending a MongoDB find command to the database.
**/
function showCats() {
  console.log('All the CATS!');
  Cat.find()
    .then(catsFromDB => {
      // catsFromDB is an array of Cat instances
      catsFromDB.forEach(oneCat => {
        console.log(` --> cat: ${oneCat.name}`)
      });
    })
    .catch(err => {
      console.log(`Error occurred during getting cats from DB: ${err}`)
    });
}

showCats();
