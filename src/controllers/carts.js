const response = require('../middlewares/response')
const cartsModel = require('../models/carts')

module.exports = {
    getCarts: (req, res) => {
        cartsModel.getCarts().then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    getCartsByUser: (req, res) => {
        cartsModel.getCartsByUser(req.params.id_user).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    getCartsByProduct: (req, res) => {
        cartsModel.getCartsByProduct(req.params.id_product).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    patchCarts: (req, res) => {
        cartsModel.patchCarts(req.body, req.params.id).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    postCarts: (req, res) => {
        cartsModel.postCarts(req.body).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    deleteCarts: (req, res) => {
        cartsModel.deleteCarts(req.params.id).then(responses => {
            response.success(res, 200, responses, {
                id: req.params.id
            })
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },
}