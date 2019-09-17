const response = require('../middlewares/response')
const requestProductsModel = require('../models/requestProducts')

module.exports = {
    getRequestProducts: (req, res) => {
        requestProductsModel.getRequestProducts().then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    getRequestProductDetails: (req, res) => {
        requestProductsModel.getRequestProductDetails(req.params.id).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    getRequestProductsByUser: (req, res) => {
        requestProductsModel.getRequestProductsByUser(req.params.id_user).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    postRequestProducts: (req, res) => {
        requestProductsModel.postRequestProducts(req.body).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong' })
        })
    },

    deleteRequestProduct: (req, res) => {
        requestProductsModel.deleteRequestProduct(req.params.id).then(responses => {
            response.success(res, 200, responses, { id: req.params.id })
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    }
}