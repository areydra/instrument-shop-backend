const response = require('../middlewares/response')
const transactionsModel = require('../models/transactions')

module.exports = {
    getTransactions : (req, res) => {
        transactionsModel.getTransactions().then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    getTransactionsPaginate : (req, res) => {
        transactionsModel.getTransactionsPaginate(req.params.offset, req.params.limit).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    getTransactionsByUser : (req, res) => {
        transactionsModel.getTransactionsByUser(req.params.id_user).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    getTransactionsByProduct : (req, res) => {
        transactionsModel.getTransactionsByProduct(req.params.id_product).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    postTransactions : (req, res) => {
        transactionsModel.postTransactions(req.body).then(responses => {
            response.success(res, 200, responses, req.body)
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },

    deleteTransaction : (req, res) => {
        transactionsModel.deleteTransaction(req.params.id).then(responses => {
            response.success(res, 200, responses, { id: req.params.id })
        }).catch(err => {
            response.failed(res, 400, err, { message: 'Sorry something went wrong!' })
        })
    },
}