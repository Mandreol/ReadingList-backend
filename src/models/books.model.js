const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Book = sequelize.define('Book', {
  id: { type: DataTypes.STRING, allowNull: false },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recommendationDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  initializationDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  finishDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pagesRead: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Book;
