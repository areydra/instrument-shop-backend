const mysql = require('mysql')

const conn = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
})

conn.connect(err => {
    if(err) throw err
})

module.exports = conn