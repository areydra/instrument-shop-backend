const express = require('express')
const router  = express.Router()
const productController = require('../controllers/products')
const authorization = require('../middlewares/authorization')

router 
    .get('/', productController.getAllProducts)
    .get('/:offset/:limit', productController.getProducts)
    .get('/:name', productController.getProductDetails)
    .get('/search/:search/:offset/:limit', productController.getSearchProducts)
    .get('/category/:name_category/:offset/:limit', productController.getProductsByCategory)
    .post('/', authorization.auth, productController.postProduct)
    .patch('/:id', authorization.auth, productController.patchProduct)
    .delete('/:id', authorization.auth, productController.deleteProduct)

module.exports = router