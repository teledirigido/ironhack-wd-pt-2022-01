const mongoose = require('../db');

const Cat = require('../models/Cat');

const cats = [
  {
    name: 'Cuki',
    age: 4,
    color: 'black'
  },
  {
    name: 'Blacki',
    age:1,
    color:'yellow'
  },
  {
    name: 'Leo',
    age: 12,
    color: 'naranja'
  }
];

Cat.create(cats)
  .then( () => {
    console.log('Data imported successfully 🐈‍');
    mongoose.connection.close();
  });
