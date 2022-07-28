const express = require('express');
const CategoriesService = require('../service/categoriesService');

const router = express.Router();

const service = new CategoriesService();

router.get('/', (req, res) => {
  const categories = service.findCategory();
  res.json(categories);
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  const category = service.findOneCategory(categoryId);
  res.json(category);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.createCategory(body);
  res.json(newCategory);
});

// router.get('/:categoriesId/products/:productsId', (req, res) => {
//   const { categoriesId, productsId } = req.params;
//   res.json({
//     categoriesId,
//     productsId,
//   });
// });

module.exports = router;
