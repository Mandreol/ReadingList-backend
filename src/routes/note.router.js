const {
  createNote,
  getNotesByBookId,
  updateNote,
  deleteNote,
} = require('../controllers/note.controllers');
const express = require('express');

const noteRouter = express.Router();

bookRouter.route('/').get(getAll).post(create);
bookRouter.route('/:id').put(update).delete(remove);

module.exports = bookRouter;
