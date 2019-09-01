const conn = require('../Configs/mysql-config')

module.exports = {
    getCategories : () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM categories', (err, res) => {
                (!err) ? resolve(res) : reject(err)  
            })
        })
    },

    getCategoriesDetail : (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM categories WHERE id=?', [id], (err,res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postCategories : (req) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO categories SET name=?, image_url=?', [req.name, req.image_url], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    patchCategories : (req, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE categories SET ? WHERE id=?', [req, id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    deleteCategories : (id) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM categories WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}