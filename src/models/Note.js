const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Book = require('./Book');

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  content: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.STRING, allowNull: false },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Books',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
});

// Definir la relación

module.exports = Note;
