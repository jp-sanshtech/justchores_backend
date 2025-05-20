const express = require('express');
const router = express.Router();
const { getCategories, getCategoryById } = require('../controllers/categoryController');

router.get('/get-categories', getCategories);
router.get('/:id', getCategoryById);

module.exports = router;
