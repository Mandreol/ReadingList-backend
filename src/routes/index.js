const express = require('express');
const router = express.Router();
const bookRouter = require('./book.router');
const noteRouter = require('./note.router');
// colocar las rutas aquí
router.use('/book', bookRouter);
router.use('/note', bookRouter);

module.exports = router;
