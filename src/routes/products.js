const express = require('express')
const router  = express.Router()
const productController = require('../controllers/products')

router 
    .get('/:offset/:limit', productController.getProducts)
    .get('/:name', productController.getProductDetails)
    .get('/search/:search/:offset/:limit', productController.getSearchProducts)
    .get('/category/:name_category/:offset/:limit', productController.getProductsByCategory)
    .post('/', productController.postProduct)
    .patch('/:id', productController.patchProduct)
    .delete('/:id', productController.deleteProduct)

module.exports = router