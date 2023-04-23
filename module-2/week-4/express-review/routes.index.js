// App
const express = require('express');
const router = express.Router();

// Models
const Cat = require('./models/Cat');

// Middlewares
const { isLoggedIn } = require('./middleware/routeGuards');

/**
 * param1 : Es la ruta o URL
 * param2 : Callback
   * @param request
   * @param response
   * @param next
   *
  app.get( param1, param2 );
 */
router.get('/home', (request, response) => {
  /**
   * reemplazar response.send por handlebar
   */
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

router.get('/profile', isLoggedIn, (request, response) => {
  const data = {
    email: 'miguel@ironhack.com',
    favourite_color: 'cyan'
  };
  let flag = 'active';
  response.render('page-profile', { data, flag });
});

router.get('/cats', isLoggedIn, (request, response) => {
  Cat.find()
    .then( (data) => {
      response.render('page-cats', { data });
  })
});

router.get('/cats/new', (request, response) => {
  response.render('new-cats');
});

router.post('/cats/new', (request, response) => {
  const catData = request.body;
  Cat.create(catData).then( () => {
    response.redirect('/cats');
  });
});


router.get('/cats/:catID', isLoggedIn, (request, response) => {
  const { catID } = request.params;
  /**
   * Optional: We read the "message" variable exists and
   * is stored stored under session
   */
  const message = request.session.message;
  delete request.session.message;

  Cat.findById(catID)
    .then( (data) => {
      /**
       * data and message are both passed to the template /views/single-cats.hbs
       */
      response.render('single-cats', { data, message });
    });
});

router.get('/cats/:catID/edit', isLoggedIn, (request, response) => {
  const { catID } = request.params;
  Cat.findById(catID)
    .then( (data) => {
      response.render('single-cats-edit', { data });
      // Render del archivo
    });
});

router.post('/cats/:catID/edit', isLoggedIn, (request, response) => {
  const { id, name, age, color } = request.body;

  Cat.findByIdAndUpdate(id, {
    name: name,
    age: age,
    color: color
  }, { returnOriginal: false }).then( (data) => {
    /**
     * Optional: We set a new variable "message" under request.session
     * which will be used later as a notification message
     */
    request.session.message = {
      type: 'success',
      body: 'Your changes has been saved'
    };
    response.redirect(`/cats/${data.id}`);
  })
});



module.exports = router;
