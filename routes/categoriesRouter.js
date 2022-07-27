const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      categoryId: 1,
      name: 'clothing',
    },
    {
      categoryId: 2,
      name: 'electronic',
    },
    {
      categoryId: 3,
      name: 'movies',
    },
    {
      categoryId: 4,
      name: 'shoes',
    },
  ]);
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
    name: 'category name',
  });
});

router.get('/:categoriesId/products/:productsId', (req, res) => {
  const { categoriesId, productsId } = req.params;
  res.json({
    categoriesId,
    productsId,
  });
});

module.exports = router;
