const express = require('express')
const router  = express.Router()
const categoriesController = require('../controllers/categories')
const authorization = require('../middlewares/authorization')

router
    .get('/', categoriesController.getCategories)
    .get('/page/:offset/:limit', categoriesController.getCategoriesPaginate)
    .post('/', authorization.auth, categoriesController.postCategory)
    .patch('/:id', authorization.auth, categoriesController.patchCategory)
    .delete('/:id', authorization.auth, categoriesController.deleteCategory)

module.exports = router