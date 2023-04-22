const express = require('express');
const router = express.Router();

const Cat = require('./models/Cat');

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

router.get('/profile', (request, response) => {
  const data = {
    email: 'miguel@ironhack.com',
    favourite_color: 'cyan'
  };
  let flag = 'active';
  response.render('page-profile', { data, flag });
});

router.get('/cats', (request, response) => {
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
  console.log('Attempting to create a new cat with POST /cats/new');
  Cat.create(catData).then( () => {
    response.redirect('/cats');
  });
});

router.get('/cats/:catID', (request, response) => {
  const { catID } = request.params;
  Cat.findById(catID)
    .then( (data) => {
      response.render('single-cats', { data });
      // Render del archivo
    });
});



module.exports = router;
