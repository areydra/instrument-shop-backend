const express = require('express')
const router  = express.Router()
const productsController = require('../Controllers/products')

router.get('/products', productsController.getProducts)
router.get('/products/:name', productsController.getProductsDetail)
router.get('/products/branchs/qty/:id', productsController.getProductsQtyByBranchs)
router.get('/products/category/:name', productsController.getProductsByCategory)
router.get('/products/search/:name', productsController.getProductsSearch)
router.get('/products/page/:offset/:limit', productsController.getProductsPaginate)

router.post('/products', productsController.postProduct)
router.patch('/products/:id', productsController.patchProduct)
router.delete('/products/:id', productsController.deleteProduct)

module.exports = router