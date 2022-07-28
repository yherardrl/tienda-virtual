const express = require('express');
const OrdersService = require('../service/ordersService');

const router = express.Router();

const services = new OrdersService();

router.get('/', (req, res) => {
  const orders = services.findOrders();
  res.json(orders);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const order = services.findOneOrder(id);
  res.json(order);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newOrder = services.createOrder(body);
  res.json(newOrder);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const orderUpdate = services.updateOrder(id, data);
  res.json(orderUpdate);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const orderDeleted = services.deleteOrder(id);
  res.json(orderDeleted);
});

module.exports = router;
