const conn = require('../config/mysql')

module.exports = {
    getCategories : () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM categories', (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getCategoriesPaginate : (offset, limit) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM categories LIMIT ?,?', [parseInt(offset),parseInt(limit)], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postCategory : category => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO categories SET ? ', [category], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    patchCategory : (category, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE categories SET ? WHERE id=?', [category, id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    deleteCategory : id => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM categories WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}