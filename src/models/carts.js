const conn = require('../config/mysql')
const query = 'SELECT carts.*, users.name AS user, products.name AS product FROM carts INNER JOIN users ON carts.id_user=users.id INNER JOIN products ON carts.id_product=products.id'

module.exports = {
    getCarts: () => {
        return new Promise((resolve, reject) => {
            conn.query(query, (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getCartsByUser: id_user => {
        return new Promise((resolve, reject) => {
            conn.query(`${query} WHERE carts.id_user=?`, [id_user], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getCartsByProduct: id_product => {
        return new Promise((resolve, reject) => {
            conn.query(`${query} WHERE carts.id_product=?`, [id_product], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    patchCarts: (wishlist, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE carts SET ?', [wishlist, id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    postCarts: wishlist => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO carts SET ?', [wishlist], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    deleteCarts: id => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM carts WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },
}