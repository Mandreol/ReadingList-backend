const {
  getAll,
  create,
  update,
  remove,
} = require('../controllers/book.controllers');
const express = require('express');

const bookRouter = express.Router();

bookRouter.route('/').get(getAll).post(create);
bookRouter.route('/:id').put(update).delete(remove);

module.exports = bookRouter;
