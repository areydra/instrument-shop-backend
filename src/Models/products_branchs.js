const conn = require('../Configs/mysql-config')

module.exports = {
	getProductsBranchsByIdProduct : id => {
		return new Promise((resolve, reject) => {
			conn.query('SELECT products_branchs.*, branchs.name FROM products_branchs INNER JOIN branchs ON products_branchs.id_branch=branchs.id WHERE products_branchs.id_product=?', [id], (err, res) => {
				(!err) ? resolve(res) : reject(err)
			})								
		})
	},

	postProductsBranchs : req => {
		return new Promise((resolve, reject) => {
			conn.query('INSERT INTO products_branchs SET ?', [req], (err, res) => {
				(!err) ? resolve(res) : reject(err)
			})			
		})
	},

	patchProductsBranchs : (req, id) => {
		return new Promise((resolve, reject) => {
			conn.query('UPDATE products_branchs SET ? WHERE id=?', [req, id], (err,res) => {
				(!err) ? resolve(res) : reject(err)
			})
		})
	},

	deleteProductsBranchs : id => {
		return new Promise((resolve, reject) => {
			conn.query('DELETE FROM products_branchs WHERE id=?', [id], (err, res) => {
				(!err) ? resolve(res) : reject(err)
			})
		})
	}
}