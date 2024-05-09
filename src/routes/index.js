const express = require('express');
const router = express.Router();
const booksRouter = require('./book.router');
// colocar las rutas aquí
router.use('/book', booksRouter);

module.exports = router;
