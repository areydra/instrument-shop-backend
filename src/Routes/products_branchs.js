const express = require('express')
const router  = express.Router()
const productsBranchsControllers = require('../Controllers/products_branchs')

router.get('/products-branchs/qty/:id', productsBranchsControllers.getProductsBranchsByIdProduct)
router.post('/products-branchs/qty', productsBranchsControllers.postProductsBranchs)
router.patch('/products-branchs/qty/:id', productsBranchsControllers.patchProductsBranchs)
router.delete('/products-branchs/qty/:id', productsBranchsControllers.deleteProductsBranchs)

module.exports = router