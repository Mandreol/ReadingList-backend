const catchError = require('../utils/catchError');
const Note = require('../models/Note');
const Book = require('../models/Book');

const createNote = catchError(async (req, res) => {
  const { bookId, content } = req.body;
  const book = await Book.findByPk(bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  const newNote = await Note.create({ content });
  await newNote.setLibro(book);
  return res.status(201).json({ note: newNote });
});

const getNotesByBookId = catchError(async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findByPk(bookId, { include: 'notas' });
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  return res.json({ notes: book.notas });
});

const updateNote = catchError(async (req, res) => {
  const { noteId } = req.params;
  const { content } = req.body;
  const note = await Note.findByPk(noteId);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  await note.update({ content });
  return res.json({ note });
});

const deleteNote = catchError(async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findByPk(noteId);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }
  await note.destroy();
  return res.json({ message: 'Note has been successfully deleted' });
});

module.exports = {
  createNote,
  getNotesByBookId,
  updateNote,
  deleteNote,
};
