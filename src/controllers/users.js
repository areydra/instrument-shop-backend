const response = require('../middlewares/response')
const userModel = require('../models/users')
const bcrypt = require('bcryptjs')

module.exports = {
    getUser : (req, res) => {
        userModel.getUsers().then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, 'Sorry something went wrong')
        })
    },

    getUserDetails : (req, res) => {
        userModel.getUserByEmail(req.params.email).then(responses => {
            response.success(res, 200, responses)
        }).catch(err => {
            response.failed(res, 400, err, 'Sorry something went wrong')
        })
    },

    postUser : async (req, res) => {
        const user = {...req.body}
        const salt = await bcrypt.genSalt(10)
        user['password'] = await bcrypt.hash(user['password'], salt)
        
        userModel.postUser(user).then(responses => {
            response.success(res, 200, responses, user)
        }).catch(err => {
            response.failed(res, 400, err, 'Sorry something went wrong!')
        })
    }
}