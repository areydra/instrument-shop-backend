const express = require('express')
const router  = express.Router()
const branchs = require('./branchs')
const products = require('./products')
const categories = require('./categories')
const products_branchs = require('./products_branchs')

router.use('/api', branchs)
router.use('/api', products)
router.use('/api', categories)
router.use('/api', products_branchs)

module.exports = router