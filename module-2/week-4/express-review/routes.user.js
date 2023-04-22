const express = require('express');
const router = express.Router();

const User = require('./models/User');

router.get('/user/register', (request, response) => {
  response.render('user/page-register');
});

router.get('/user/login', (requser, response) => {
  response.render('user/page-login')
})

router.post('/user/register', (request, response) => {
  const { email, password } = request.body;
  User.create({
    email: email,
    // password: password
  })
  console.log(email, password);
});

module.exports = router;
