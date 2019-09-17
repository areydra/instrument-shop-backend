const express = require('express')
const router = express.Router()
const cartsController = require('../controllers/carts')

router
    .get('/', cartsController.getCarts)
    .get('/user/:id_user', cartsController.getCartsByUser)
    .get('/product/:id_product', cartsController.getCartsByProduct)
    .post('/', cartsController.postCarts)
    .patch('/:id', cartsController.patchCarts)
    .delete('/:id', cartsController.deleteCarts)

module.exports = router