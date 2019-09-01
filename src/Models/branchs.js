const conn = require('../Configs/mysql-config')

module.exports = {
    getBranchs : () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM branchs', (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getBranchsDetail: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM branchs WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    postBranchs: (req) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO branchs SET name=?', [req.name], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    patchBranchs: (req, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE branchs SET name=? WHERE id=?', [req.name, id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    deleteBranchs: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM branchs WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },
}