require('dotenv/config')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const router = require('./src/Routes/root')

const app = express()
const port = process.env.PORT || 8080
const nodeEnv = process.env.NODE_ENV || 'production'

app.listen(port, () => {
    console.log(`Server has been running on port ${port} and mode ${nodeEnv}`)
})


//menambahkan middleware CORS agar bisa diakses untuk dari app lain
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)