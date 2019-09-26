const response = require('../middlewares/response')
const wishlistsModel = require('../models/wishlists')

module.exports = {
    getWishlists: (req, res) => {
        wishlistsModel.getWishlists().then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    getWishlistDetails: (req, res) => {
        wishlistsModel.getWishlistDetails(req.params.id_user, req.params.id_product).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    getWishlistsByUser: (req, res) => {
        wishlistsModel.getWishlistsByUser(req.params.id_user).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    getWishlistsByProduct: (req, res) => {
        wishlistsModel.getWishlistsByProduct(req.params.id_product).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    patchWishlists: (req, res) => {
        wishlistsModel.patchWishlists(req.body, req.params.id).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    postWishlists: (req, res) => {
        wishlistsModel.postWishlists(req.body).then(responsess => {
            wishlistsModel.getWishlistDetails(req.body.id_user, req.body.id_product).then(responses => {
                response.success(res, 200, responses, req.body)                
            })
        }).catch(err => {
            response.failed(res, 400, err, {
                message: 'Sorry something went wrong!'
            })
        })
    },

    deleteWishlists: (req, res) => {
        wishlistsModel.deleteWishlists(req.params.id).then(responses => {
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