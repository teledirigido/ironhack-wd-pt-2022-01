// App
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const saltRounds = 10;

// Models
const User = require('./models/User');

// Middlewares
const { isLoggedIn } = require('./middleware/routeGuards');

router.get('/user/register', (request, response) => {
  response.render('user/page-register');
});

router.get('/user/login', (request, response) => {
  response.render('user/page-login');
});

router.get("/user/logout", (req, res) => {
  req.session.destroy( (err) => {
    if (err) {
      res.status(500).render("user/page-logout", { errorMessage: err.message });
      return;
    }
    retres.redirect("/cats");
  });
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

router.post('/user/login', (req, res, next) => {
  const { email, password } = req.body;

  // Si los campos estan vacios, then error
  // Check that username, email, and password are provided
  if (email === "" || password === "" || email === undefined || password === undefined) {
    res.status(400).render("user/page-login", {
      errorMessage:
        "All fields are mandatory. Please provide username, email and password.",
    });

    return;
  }


  // Search the database for a user with the email submitted in the form
  User.findOne({ email })
    .then((user) => {

      // If the user isn't found, send an error message that user provided wrong credentials
      if (!user) {
        res
          .status(400)
          .render("user/page-login", { errorMessage: "Wrong credentials." });
        return;
      }

      // If user is found based on the username, check if the in putted password matches the one saved in the database
      bcrypt
        .compare(password, user.password)
        .then((isSamePassword) => {
          if (!isSamePassword) {
            res
              .status(400)
              .render("user/page-login", { errorMessage: "Wrong credentials." });
            return;
          }

          // Add the user object to the session object
          req.session.currentUser = user.toObject();
          // Remove the password field
          delete req.session.currentUser.password;

          res.redirect("/cats");

        })
        .catch((err) => next(err)); // In this case, we send error handling to the error handling middleware.
    })
    .catch((err) => next(err));

});


module.exports = router;
