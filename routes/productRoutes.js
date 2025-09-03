// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes for products
router
    .route('/')
    .get(productController.getAllProducts)   // Get all products
    .post(productController.createProduct);  // Add new product

router
    .route('/:id')
    .get(productController.getProduct)       // Get single product
    .patch(productController.updateProduct)  // Update product
    .delete(productController.deleteProduct);// Delete product

module.exports = router;
