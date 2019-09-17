const express = require('express')
const router  = express.Router()
const userController = require('../controllers/users')

router
    .get('/', userController.getUser)
    .get('/details/:email', userController.getUserDetails)
    .post('/', userController.postUser)

module.exports = router