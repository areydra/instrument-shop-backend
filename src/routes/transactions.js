const express = require('express')
const router  = express.Router()
const transactionsController = require('../controllers/transactions')

router
    .get('/', transactionsController.getTransactions)
    .get('/user/:id_user', transactionsController.getTransactionsByUser)
    .get('/product/:id_product', transactionsController.getTransactionsByProduct)
    .post('/', transactionsController.postTransactions)
    .delete('/:id', transactionsController.deleteTransaction)

module.exports = router