const conn = require('../config/mysql')

module.exports = {
    getRequestProducts : () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM request_products', (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getRequestProductDetails: id => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM request_products WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getRequestProductsByUser : id_user => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM request_products WHERE id_user=?', [id_user], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postRequestProducts: requestProduct => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO request_products SET ?', [requestProduct], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    deleteRequestProduct : id => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM request_products WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}