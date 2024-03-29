const express = require('express')
const router = express.Router()
const wishlistsController = require('../controllers/wishlists')

router
    .get('/', wishlistsController.getWishlists)
    .get('/user/:id_user', wishlistsController.getWishlistsByUser)
    .get('/product/:id_product', wishlistsController.getWishlistsByProduct)
    .get('/details/:id_user/:id_product', wishlistsController.getWishlistDetails)
    .post('/', wishlistsController.postWishlists)
    .patch('/:id', wishlistsController.patchWishlists)
    .delete('/:id', wishlistsController.deleteWishlists)

module.exports = router