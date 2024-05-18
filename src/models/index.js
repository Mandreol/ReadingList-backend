const Book = require('./Book');
const Note = require('./Note');

Book.hasMany(Note, { foreignKey: 'bookId', onDelete: 'CASCADE' });
Note.belongsTo(Book, { foreignKey: 'bookId' });

module.exports = { Book, Note };
