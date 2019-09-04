const respon = require('../Helpers/response')
const productsBranchsModel = require('../Models/products_branchs')

module.exports = {

	getProductsBranchsByIdProduct: (req, res) => {
		productsBranchsModel.getProductsBranchsByIdProduct(req.params.id).then(response => {
			respon.success(res, 200, response)
		}).catch(err => {
			console.log(err)
		})
	},

	postProductsBranchs : (req, res) => {
		productsBranchsModel.postProductsBranchs(req.body).then(response => {
			respon.success(res, 200, response)
		}).catch(err => {
			console.log(err)
		})
	},

	patchProductsBranchs : (req, res) => {
		productsBranchsModel.patchProductsBranchs(req.body, req.params.id).then(response => {
			respon.success(res, 200, response)
		}).catch(err => {
			console.log(err)
		})
	},

	deleteProductsBranchs : (req, res) => {
		productsBranchsModel.deleteProductsBranchs(req.params.id).then(response => {
			respon.success(res, 200, response)
		}).catch(err => {
			console.log(err)
		})
	}
}