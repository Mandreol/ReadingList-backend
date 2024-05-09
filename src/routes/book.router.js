const { getAll, create } = require('../controllers/book.controllers');
const express = require('express');

const bookRouter = express.Router();

bookRouter.route('/').get(getAll).post(create);

module.exports = bookRouter;
