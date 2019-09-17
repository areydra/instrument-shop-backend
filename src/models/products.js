const conn = require('../config/mysql')

module.exports = {
    getProducts : (offset, limit) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM products LIMIT ?,?', [offset, limit] , (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getSearchProducts: search => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM products WHERE name LIKE ? OR description LIKE ?', ['%'+search+'%', '%'+search+'%'] , (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getProductsByCategory: id => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM products WHERE id_category=?', [id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getProductDetails : name => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM products WHERE name=?', [name], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postProduct : product => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO products SET ?', [product], (err, res) => {
                (!err) ? resolve(res) :reject(err)
            })
        })
    },

    patchProduct : (product,id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE products SET ? WHERE id=?', [product, id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    deleteProduct: id => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM products WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}