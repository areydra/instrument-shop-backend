const express = require('express')
const router  = express.Router()
const branchs = require('./branchs')
const products = require('./products')
const categories = require('./categories')

router.use('/api', branchs)
router.use('/api', products)
router.use('/api', categories)

module.exports = router