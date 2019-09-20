const express = require('express')
const router  = express.Router()
const requestProductsController = require('../controllers/requestProducts')

router 
    .get('/', requestProductsController.getRequestProducts)
    .get('/page/:offset/:limit', requestProductsController.getRequestProductsPaginate)
    .get('/:id', requestProductsController.getRequestProductDetails)
    .get('/user/:id_user', requestProductsController.getRequestProductsByUser)
    .post('/', requestProductsController.postRequestProducts)
    .delete('/:id', requestProductsController.deleteRequestProduct)

module.exports = router