const modelProducts = require('../Models/products')
const respon = require('../Helpers/response')

module.exports = {
    getProducts: (req, res) => {
        modelProducts.getProducts().then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsDetail: (req, res) => {
        modelProducts.getProductsDetail(req.params.name).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsQtyByBranchs: (req, res) => {
        modelProducts.getProductsQtyBranchs(req.params.id).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsByCategory: (req, res) => {
        modelProducts.getProductsByCategory(req.params.name).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsSearch: (req, res) => {
        modelProducts.getProductsSearch(req.params.name).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsPaginate: (req, res) => {
        modelProducts.getProductsPaginate(req.params.offset, req.params.limit).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    postProduct: (req, res) => {
        modelProducts.postProduct(req.body).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    patchProduct: (req, res) => {
        modelProducts.patchProduct(req.body, req.params.id).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    deleteProduct: (req, res) => {
        modelProducts.deleteProduct(req.params.id).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    }
}