const catchError = require('../utils/catchError');
const Book = require('../models/Book');

const getAll = catchError(async (req, res) => {
  const results = await Book.findAll();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Book.create(req.body);
  return res.status(201).json(result);
});

module.exports = {
  getAll,
  create,
};
