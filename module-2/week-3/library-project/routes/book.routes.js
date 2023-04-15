const router = require('express').Router();

const Book = require('../models/Book.model.js');

// GET route to retrieve and display all the books
router.get('/books', (req, res) => {
  console.log(req.params);
  Book.find()
    .then(allTheBooksFromDB => {
      // -> allTheBooksFromDB is a placeholder, it can be any word
      console.log('Retrieved books from DB:', allTheBooksFromDB);
      res.render('books/books-list.hbs', {
        books: allTheBooksFromDB
      });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get('/books/create', (req, res) => {
  res.render('books/book-create.hbs');
});

/**
 * @url /books/create ruta del POST definida en
 * el atributo action del formulario
 */
router.post('/books/create', (req, res) => {

  /**
   * { title, author, description, rating } Las variables del
   * formulario del req.body
   */
  const { title, author, description, rating } = req.body;

  /**
   * Book.create Metodo de Mongoose para
   * crear un nuevo documento en la coleccion Book
   *
   * { title, author, description, rating } los campos del modelo Book
   */
  Book.create({ title, author, description, rating })
    .then(bookFromDB => {
      /**
       * Redirecion cuando ya se ha creado el libro Book.
       */
      res.redirect('/books')
    })
    .catch(error => next(error));
});



router.get('/books/delete/:bookId', (req, res) => {
  const { bookId } = req.params;
  console.log(`Deleting the book ID: ${bookId}`);
  Book.findById(bookId)
    .then( theBook => {
    theBook.deleteOne();
  })
  .then(() => {
    res.redirect('/books')
  })
});

/**
 * /books/edit/:bookId/ la URL del browser
 * @param :bookID el ID del libro
 *
 */
router.get('/books/:bookId/edit', (req, res) => {
  /**
   *
   */
  const { bookId } = req.params;
  console.log(`1. Editing the book ID: ${bookId}`);
  Book.findById(bookId)
    .then( theBook => {
      res.render('books/book-edit', { book: theBook });
    });
});

/**
 * @param '/books/edit': el POST url para editar un libro
 */
router.post('/books/edit', (req, res) => {
  /**
   * id, title, author, description, rating:
   * Los campos del formulario, que ademas coinciden con los
   * campos del modelo Book.
   */
  const { id, title, author, description, rating } = req.body;

  /**
   * @function findByIdAndUpdate método del modelo Book
   * @param id: El id del libro
   * @param { title, description, author, rating } los campos que
   * queremos actualizar
   * @param { new: true }
   */
  Book.findByIdAndUpdate( id, { title, description, author, rating }, { new: true })
  /**
   * updatedBook: El libro una vez actualizado
   */
  .then(updatedBook => {
    /**
     * Redireccion una vez hecha la actualizacion
     * Utilizamos el redirect para ir a la vista
     * del libro ya actualizado.
     **/
    res.redirect(`/books/${id}`)
  }).catch(error => next(error));
});

router.get('/books/:bookId', (req, res) => {
  const { bookId } = req.params;
  console.log(req.params);
  console.log('The ID from the URL is: ', bookId);
  Book.findById(bookId).then( (bookData) => {
    res.render('books/book-details.hbs', {
      book: bookData
    });
  })
});

module.exports = router;
