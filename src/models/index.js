const Book = require('./Book');
const Note = require('./Note');

Book.hasMany(Note);
Note.belongsTo(Book);

module.exports = { Book, Note };
