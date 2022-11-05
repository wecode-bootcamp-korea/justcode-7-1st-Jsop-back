const express = require('express');
const { filter } = require('../controllers/filterController');

const router = express.Router();
router.get('/filter', filter);

module.exports = router;
