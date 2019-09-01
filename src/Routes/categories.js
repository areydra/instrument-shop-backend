const express = require('express')
const router  = express.Router()
const categoriesController = require('../Controllers/categories')

router.get('/categories', categoriesController.getCategories)
router.get('/categories/:id', categoriesController.getCategoriesDetail)
router.post('/categories', categoriesController.postCategories)
router.patch('/categories/:id', categoriesController.patchCategories)
router.delete('/categories/:id', categoriesController.deleteCategories)

module.exports = router
