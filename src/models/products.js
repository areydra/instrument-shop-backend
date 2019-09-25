const conn = require('../config/mysql')

module.exports = {
    getAllProducts : () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id',  (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getFavoriteProducts : () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT wishlists.id_product, products.name, products.image, products.price, COUNT(wishlists.id_product) FROM wishlists INNER JOIN products ON wishlists.id_product = products.id GROUP BY wishlists.id_product ORDER BY COUNT(wishlists.id_product) DESC LIMIT 0,10',  (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getBestProducts : () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT transaksi.id_product, products.name, products.image, products.price, COUNT(transaksi.id_product) FROM transaksi INNER JOIN products ON transaksi.id_product = products.id GROUP BY transaksi.id_product ORDER BY COUNT(transaksi.id_product) DESC LIMIT 0,10',  (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getProducts : (offset, limit) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id ORDER BY products.created_at LIMIT ?,?', [parseInt(offset), parseInt(limit)] , (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getSearchProducts: (search, offset, limit) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM products WHERE name LIKE ? OR description LIKE ? LIMIT ?,?', ['%'+search+'%', '%'+search+'%', parseInt(offset), parseInt(limit)] , (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getProductsByCategory: (name_category, offset, limit) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id WHERE categories.name=? LIMIT ?, ?', [name_category, parseInt(offset), parseInt(limit)], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getProductDetails : name => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT products.*, categories.name AS category FROM products INNER JOIN categories ON products.id_category=categories.id WHERE products.name=?', [name], (err, res) => {
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
        if(product.category) delete product.category
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