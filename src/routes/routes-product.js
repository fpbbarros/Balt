'use strict';

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.get);
router.get('/:slug', ProductController.getBySlug);
router.get('/admin/:id', ProductController.getById);
router.get('/tags/:tag', ProductController.getByTags);
router.post('/', ProductController.post);
router.put('/:id', ProductController.put);
router.delete('/', ProductController.delete);

module.exports = router;