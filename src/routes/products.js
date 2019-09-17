const express = require('express')
const router  = express.Router()
const productController = require('../controllers/products')

router 
    .get('/:offset/:limit', productController.getProducts)
    .get('/:name', productController.getProductDetails)
    .get('/search/:search', productController.getSearchProducts)
    .get('/category/:id', productController.getProductsByCategory)
    .post('/', productController.postProduct)
    .patch('/:id', productController.patchProduct)
    .delete('/:id', productController.deleteProduct)

module.exports = router