const response = require('../middlewares/response')
const productsModel = require('../models/products')

module.exports = {
    getProducts : (req, res) => {
        productsModel.getProducts(req.params.offset, req.params.limit).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    getSearchProducts: (req, res) => {
        productsModel.getSearchProducts(req.params.search,req.params.offset,req.params.limit).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    getProductsByCategory: (req, res) => {
        productsModel.getProductsByCategory(req.params.name_category,req.params.offset,req.params.limit).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    getProductDetails : (req, res) => {
        productsModel.getProductDetails(req.params.name).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    postProduct : (req, res) => {
        productsModel.postProduct(req.body).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    patchProduct : (req, res) => {
        productsModel.patchProduct(req.body, req.params.id).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    deleteProduct : (req, res) => {
        productsModel.deleteProduct(req.params.id).then(responses => {
            response.success(res, 200, responses, { id: req.params.id })
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went Wrong!' })
        })
    }
}