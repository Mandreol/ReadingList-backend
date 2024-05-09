const catchError = require('../utils/catchError');
const Book = require('../models/Books');

const getAll = catchError(async (req, res) => {
  const results = await Book.findAll();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Book.create(req.body);
  return res.status(201).json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Book.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Product.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  create,
  remove,
  update,
};
