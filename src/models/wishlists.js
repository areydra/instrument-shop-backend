const conn = require('../config/mysql')
const query = 'SELECT wishlists.*, users.name AS user, products.name AS product FROM wishlists INNER JOIN users ON wishlists.id_user=users.id INNER JOIN products ON wishlists.id_product=products.id'

module.exports = {
    getWishlists: () => {
        return new Promise((resolve, reject) => {
            conn.query(query, (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getWishlistsByUser: id_user => {
        return new Promise((resolve, reject) => {
            conn.query(`${query} WHERE wishlists.id_user=?`, [id_user], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getWishlistsByProduct: id_product => {
        return new Promise((resolve, reject) => {
            conn.query(`${query} WHERE wishlists.id_product=?`, [id_product], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    patchWishlists: (wishlist, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE wishlists SET ?', [wishlist, id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    postWishlists: wishlist => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO wishlists SET ?', [wishlist], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    deleteWishlists: id => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM wishlists WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },    
}