const express = require('express')
const router  = express.Router()
const userController = require('../controllers/users')
const authorization = require('../middlewares/authorization')

router
    .get('/', authorization.auth, userController.getUser)
    .get('/details/:email', userController.getUserDetails)
    .post('/', userController.postUser)

module.exports = router