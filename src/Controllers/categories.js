const modelCategories = require('../Models/categories')
const respon = require('../Helpers/response')

module.exports = {
    getCategories : (req, res) => {
        modelCategories.getCategories().then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getCategoriesDetail: (req, res) => {
        modelCategories.getCategoriesDetail(req.params.id).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    postCategories: (req, res) => {
        modelCategories.postCategories(req.body).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    patchCategories: (req, res) => {
        modelCategories.patchCategories(req.body, req.params.id).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    deleteCategories: (req, res) => {
        modelCategories.deleteCategories(req.params.id).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    }
}