const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.json([
      {
        userId: 1,
        name: 'julio',
        addres: 'argentina',
      },
      {
        userId: 1,
        name: 'bruno',
        addres: 'peru',
      },
      {
        userId: 1,
        name: 'elisa',
        address: 'colombia',
      },
    ]);
  }
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({
    userId,
    name: 'user  name',
    address: 'addres name',
  });
});

module.exports = router;
