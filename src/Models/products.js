const conn = require('../Configs/mysql-config')

module.exports = {
    getProducts: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM products', (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getProductsDetail: (name) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM products WHERE name=?', [name], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getProductsQtyBranchs: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT products_branchs.id, products.name as product, branchs.name as branch, products_branchs.quantity FROM products_branchs INNER JOIN products ON products_branchs.id_product=products.id INNER JOIN branchs ON products_branchs.id_branch=branchs.id WHERE products.id=?', [id], (err,res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getProductsByCategory: (name) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id WHERE categories.name=?', [name], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getProductsSearch: (name) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id WHERE categories.name LIKE ? OR products.name LIKE ? OR products.description LIKE ?', ['%'+name+'%', '%'+name+'%', '%'+name+'%'], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getProductsPaginate: (offset, limit) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id LIMIT ?,?', [parseInt(offset), parseInt(limit)], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postProduct: (req) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO products SET id_category=?, name=?, description=?, price=?, image_url=?', [req.id_category, req.name, req.description, req.price, req.image_url], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    patchProduct: (req, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE products SET ? WHERE id=?', [req, id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM products WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}