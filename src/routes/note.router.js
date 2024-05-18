const {
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/note.controllers');
const express = require('express');

const noteRouter = express.Router();

noteRouter.route('/').post(createNote);
noteRouter.route('/:id').put(updateNote).delete(deleteNote);

module.exports = noteRouter;
