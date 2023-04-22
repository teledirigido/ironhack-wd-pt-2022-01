const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require('./models/User');

router.get('/user/register', (request, response) => {
  response.render('user/page-register');
});


  router.post("/user/register", (req, res) => {
    const { email, password } = req.body;  

  // Check that username, email, and password are provided
  if (email === "" || password === "") {
    res.status(400).render("user/page-register", {
      errorMessage:
        "All fields are mandatory. Please provide your username, email and password.",
    });

    return;
  }

  if (password.length < 6) {
    res.status(400).render("user/page-register", {
      errorMessage: "Your password needs to be at least 6 characters long.",
    });

    return;
  }

  // Create a new user - start by hashing the password
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hashedPassword) => {
      // Create a user and save it in the database
      return User.create({ email, password: hashedPassword });
    })
    .then((user) => {
      res.redirect("/profile");
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render("user/page-register", { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render("user/page-register", {
          errorMessage:
            "Username and email need to be unique. Provide a valid username or email.",
        });
      } else {
        next(error);
      }
    });
});


module.exports = router;
