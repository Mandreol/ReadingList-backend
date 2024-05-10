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

const update = catchError(async (req, res) => {
  const { bookId } = req.params;
  const { titulo, autor } = req.body;
  const book = await Book.findByPk(bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  await book.update({ titulo, autor });
  return res.json({ book });
});

const remove = catchError(async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findByPk(bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  await book.destroy();
  return res.json({ message: 'Book has been successfully deleted' });
});

module.exports = {
  getAll,
  create,
  update,
  remove,
};
