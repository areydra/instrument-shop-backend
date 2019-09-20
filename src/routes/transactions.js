const express = require('express')
const router  = express.Router()
const transactionsController = require('../controllers/transactions')
const authorization = require('../middlewares/authorization')

router
    .get('/', authorization.auth, transactionsController.getTransactions)
    .get('/page/:offset/:limit', authorization.auth, transactionsController.getTransactionsPaginate)
    .get('/user/:id_user', transactionsController.getTransactionsByUser)
    .get('/product/:id_product', transactionsController.getTransactionsByProduct)
    .post('/', transactionsController.postTransactions)
    .delete('/:id', transactionsController.deleteTransaction)

module.exports = router