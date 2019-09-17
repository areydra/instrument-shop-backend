const response  = require('../middlewares/response')
const userModel = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') 

module.exports = {
    login : (req, res) => {
        userModel.getUserByEmail(req.body.email).then(async responses => {
            const user = responses[0]
            const token = jwt.sign({ email: user.email, level: user.id_level }, process.env.SECRET_KEY, { expiresIn: '24h' })
            const checkPassword = await bcrypt.compare(req.body.password, user.password)
            
            if(checkPassword){
                response.success(res, 200, { status: 200, message: 'success login', token: token })
            }else{
                response.failed(res, 400, { status: 400, message: 'invalid email or password' })
            }
        }).catch(err => {
            response.failed(res, 400, err, { status: 400, message: 'invalid email or password' })
        })
    },

    register: async(req, res) => {
        const user = {...req.body}
        const salt = await bcrypt.genSalt(10)
        user['password'] = await bcrypt.hash(user['password'], salt)

        userModel.postUser(user).then(responses => {
            response.success(res, 200, responses, user)
        }).catch(err => {
            response.failed(res, 400, responses, { message: 'err' })
        })
    }
}