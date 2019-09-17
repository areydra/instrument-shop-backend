const response = require('../middlewares/response')
const categoriesModel = require('../models/categories')

module.exports = {
    getCategories : (req, res) => {
        categoriesModel.getCategories().then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    postCategory : (req, res) => {
        categoriesModel.postCategory(req.body).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    patchCategory : (req, res) => {
        categoriesModel.patchCategory(req.body, req.params.id).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    deleteCategory : (req, res) => {
        categoriesModel.deleteCategory(req.params.id).then(responses => {
            response.success(res, 200, responses, { id: req.params.id })
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    }
}