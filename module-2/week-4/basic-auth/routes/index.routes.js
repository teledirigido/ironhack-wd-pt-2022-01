const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/dashboard', isLoggedIn, (req,res,next) => {
  res.render('dashboard');
})

router.get('/edit-profile', isLoggedIn, (req,res,next) => {
  res.render('auth/edit-profile');
})

module.exports = router;
