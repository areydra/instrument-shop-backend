const modelBranchs = require('../Models/branchs')
const respon = require('../Helpers/response')

module.exports = {
    getBranchs : (req, res) => {
        modelBranchs.getBranchs().then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getBranchsDetail : (req, res) => {
        modelBranchs.getBranchsDetail(req.params.id).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    postBranchs: (req, res) => {
        modelBranchs.postBranchs(req.body).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    patchBranchs: (req, res) => {
        modelBranchs.patchBranchs(req.body, req.params.id).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    deleteBranchs: (req, res) => {
        modelBranchs.deleteBranchs(req.params.id).then(response => {
            respon.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    }
}