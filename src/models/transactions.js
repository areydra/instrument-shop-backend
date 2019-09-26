const conn = require('../config/mysql')
const query = "SELECT transaksi.*, users.name as user, products.name as product, products.image, products.price FROM transaksi INNER JOIN users ON transaksi.id_user=users.id INNER JOIN products ON transaksi.id_product=products.id"

module.exports = {
    getTransactions : () => {
        return new Promise((resolve, reject) => {
            conn.query(query, (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getTransactionsPaginate : (offset, limit) => {
        return new Promise((resolve, reject) => {
            conn.query(`${query} ORDER BY transaksi.created_at DESC LIMIT ?,?`,[parseInt(offset),parseInt(limit)], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getTransactionsByUser : id_user => {
        return new Promise((resolve, reject) => {
            conn.query(`${query} WHERE transaksi.id_user=? ORDER BY transaksi.created_at DESC`, [id_user], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getTransactionsByProduct : id_product => {
        return new Promise((resolve, reject) => {
            conn.query(`${query} WHERE transaksi.id_product=?`, [id_product], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postTransactions : transactions => {
        let newTransactions = []

        if(transactions.length){
            newTransactions = []
            transactions.map(transaction => {
                newTransactions.push(`(NULL, ${transaction.id_user}, ${transaction.id_product}, ${transaction.qty}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`)
            })
        }else{
            newTransactions = `(NULL, ${transactions.id_user}, ${transactions.id_product}, ${transactions.qty}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`
        }

        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO transaksi (id, id_user, id_product, qty, created_at, updated_at) VALUES ${newTransactions.toString()}`, (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    deleteTransaction : id => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM transaksi WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },
}