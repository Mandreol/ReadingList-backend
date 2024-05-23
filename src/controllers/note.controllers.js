const catchError = require('../utils/catchError');
const Note = require('../models/Note');
const Book = require('../models/Book');

const getAllBooks = catchError(async (req, res) => {
  const results = await Book.findAll({
    include: [{ model: Note }],
  });
  return res.json(results);
});

const createNote = catchError(async (req, res) => {
  const { bookId, content, date } = req.body;
  const book = await Book.findByPk(bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  await Note.create({ content, date, bookId });
  return getAllBooks(req, res);
});

const updateNote = catchError(async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const note = await Note.findByPk(id);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  await note.update({ content });
  return getAllBooks(req, res); // Llama a getAllBooks y retorna la lista actualizada
});

const deleteNote = catchError(async (req, res) => {
  const { id } = req.params;
  const note = await Note.findByPk(id);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  await note.destroy();
  return getAllBooks(req, res);
});

module.exports = {
  createNote,
  updateNote,
  deleteNote,
};
