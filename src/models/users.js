const conn = require('../config/mysql')

module.exports = {
    getUsers : () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM users', (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getUserByEmail : email => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM users where email=?', [email], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postUser : user => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO users SET ? ', [user], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}