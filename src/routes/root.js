const express = require('express')
const router  = express.Router()

const auth = require('./auth')
const users = require('./users')
const carts = require('./carts')
const products = require('./products')
const wishlists = require('./wishlists')
const categories = require('./categories')
const transactions = require('./transactions')
const requestProducts = require('./requestProducts')


router.use('/auth', auth)
router.use('/users', users)
router.use('/carts', carts)
router.use('/products', products)
router.use('/wishlists', wishlists)
router.use('/categories', categories)
router.use('/transactions', transactions)
router.use('/request-products', requestProducts)

module.exports = router