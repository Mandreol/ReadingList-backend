const express = require('express');
const router = express.Router();
const booksRouter = require('./books.router');
// colocar las rutas aquí
router.use('/books', booksRouter);

module.exports = router;
