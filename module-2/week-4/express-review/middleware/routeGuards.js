const isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    res.locals.user = req.session.currentUser;
  }
  next();
};

const isLoggedOut = (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/');
  }
  next();
};

module.exports = {
  isLoggedIn,
  isLoggedOut
}
