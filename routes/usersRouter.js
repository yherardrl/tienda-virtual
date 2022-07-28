const express = require('express');
const usersService = require('../service/usersService');

const router = express.Router();

const service = new usersService();

router.get('/', (req, res) => {
  const users = service.find();
  res.status(401).json(users);
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const user = service.findOne(userId);
  res.json(user);
});

router.post('/', (req, res) => {
  const data = req.body;
  const newUser = service.create(data);
  res.status(201).json(newUser);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const update = service.update(id, body);
  res.json(update);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rst = service.delete(id);
  res.json(rst);
});

module.exports = router;
