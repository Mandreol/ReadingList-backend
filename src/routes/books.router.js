const {
  getAll,
  create,
  remove,
  update,
} = require('../controllers/books.controllers');
const express = require('express');

const productRouter = express.Router();

productRouter.route('/').get(getAll).post(create);

productRouter.route('/:id').delete(remove).put(update);

module.exports = bookRouter;
