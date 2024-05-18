const catchError = require('../utils/catchError');
const Note = require('../models/Note');
const Book = require('../models/Book');

const createNote = catchError(async (req, res) => {
  const { bookId, content, date } = req.body;
  const book = await Book.findByPk(bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  const newNote = await Note.create({ content, date, bookId });
  return res.status(201).json({ note: newNote });
});

const updateNote = catchError(async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const note = await Note.findByPk(id);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  await note.update({ content });
  return res.json({ note });
});

const deleteNote = catchError(async (req, res) => {
  const { id } = req.params;
  const note = await Note.findByPk(id);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  await note.destroy();
  return res.json({ message: 'Note has been successfully deleted' });
});

module.exports = {
  createNote,
  updateNote,
  deleteNote,
};
