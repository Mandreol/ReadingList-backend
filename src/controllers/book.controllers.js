const catchError = require('../utils/catchError');
const Book = require('../models/Book');
const Note = require('../models/Note');

const getAll = catchError(async (req, res) => {
  const results = await Book.findAll({
    include: [{ model: Note }],
  });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Book.create(req.body);
  return res.status(201).json(result);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const {
    pagesRead,
    state,
    recommendationDate,
    initializationDate,
    finishDate,
  } = req.body;
  const book = await Book.findByPk(id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  await book.update({
    pagesRead,
    state,
    recommendationDate,
    initializationDate,
    finishDate,
  });
  return res.json({ book });
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);
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
