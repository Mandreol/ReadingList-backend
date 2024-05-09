const { getAll, create } = require('../controllers/book.controllers');
const express = require('express');

const productRouter = express.Router();

productRouter.route('/').get(getAll).post(create);

module.exports = bookRouter;
