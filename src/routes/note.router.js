const {
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/note.controllers');
const express = require('express');

const noteRouter = express.Router();

bookRouter.route('/').post(createNote);
bookRouter.route('/:id').put(updateNote).delete(deleteNote);

module.exports = noteRouter;
