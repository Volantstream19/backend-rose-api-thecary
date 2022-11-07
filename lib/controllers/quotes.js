const { Router } = require('express');
const { Quote } = require('../models/Quote.js');

module.exports = Router().post('/', async (req, res) => {
  const insert = await Quote.insert({ ...req.body });
  res.json(insert);
});
