const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      orderId: 1,
      products: [
        {
          name: 'prduct 1',
        },
        {
          name: 'prduct 2',
        },
      ],
      total: 100000,
    },
    {
      orderId: 2,
      products: [
        {
          name: 'prduct x',
        },
        {
          name: 'prduct y',
        },
      ],
      total: 5000,
    },
    {
      orderId: 3,
      products: [
        {
          name: 'prduct 1',
        },
      ],
      total: 420,
    },
    {
      orderId: 1,
      products: [
        {
          name: 'prduct 7',
        },
        {
          name: 'prduct 3',
        },
      ],
      total: 6503,
    },
  ]);
});

router.get('/:orderId', (req, res) => {
  const { orderId } = req.params;
  res.json({
    orderId,
    products: [
      {
        name: 'prduct name',
      },
      {
        name: 'prduct name',
      },
    ],
    total: 'total pay',
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Generated order',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Modified order',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted order',
    id,
  });
});

module.exports = router;
