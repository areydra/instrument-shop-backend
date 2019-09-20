const express = require('express')
const router  = express.Router()
const categoriesController = require('../controllers/categories')

router
    .get('/', categoriesController.getCategories)
    .get('/page/:offset/:limit', categoriesController.getCategoriesPaginate)
    .post('/', categoriesController.postCategory)
    .patch('/:id', categoriesController.patchCategory)
    .delete('/:id', categoriesController.deleteCategory)

module.exports = router