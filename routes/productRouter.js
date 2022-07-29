const express = require('express');
const ProductsService = require('../service/productsService');
const validatorHandler = require('../middleware/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schema/productSchema');

const router = express.Router();

const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Hola, soy un filter');
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, '.params'),
  async (req, res, netx) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      netx(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, '.body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, '.params'),
  validatorHandler(updateProductSchema, '.body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const productUpdate = await service.update(id, body);
      res.json(productUpdate);
    } catch (error) {
      res.starus(404).json({
        message: error.message,
      });
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
