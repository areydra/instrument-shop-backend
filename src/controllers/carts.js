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

    getCartDetails: (req, res) => {
        cartsModel.getCartDetails(req.params.id_user, req.params.id_product).then(responses => {
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
        delete req.body.created_at 
        delete req.body.updated_at 
        delete req.body.user 
        delete req.body.product 
        delete req.body.price 
        delete req.body.image
        delete req.body.id

        cartsModel.patchCarts(req.body, req.params.id).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            console.log(err)
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    postCarts: (req, res) => {
        if(req.body.id){
            delete req.body.created_at 
            delete req.body.updated_at 
            delete req.body.user 
            delete req.body.product 
            delete req.body.price 
            delete req.body.image
            delete req.body.id            
        }

        cartsModel.postCarts(req.body).then(responsess => {
            cartsModel.getCartDetails(req.body.id_user, req.body.id_product).then(responses => {
                response.success(res, 200, responses, req.body)                
            })
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    deleteCarts: (req, res) => {
        // console.log(req.params.id)
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