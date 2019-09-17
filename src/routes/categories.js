const express = require('express')
const router  = express.Router()
const categoriesController = require('../controllers/categories')

router
    .get('/', categoriesController.getCategories)
    .post('/', categoriesController.postCategory)
    .patch('/:id', categoriesController.patchCategory)
    .delete('/:id', categoriesController.deleteCategory)

module.exports = router