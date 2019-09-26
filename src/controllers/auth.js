const response  = require('../middlewares/response')
const userModel = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') 

module.exports = {
    login : (req, res) => {
        userModel.getUserByEmail(req.body.email).then(async responses => {
            const user = responses[0]
            const token = jwt.sign({ id: user.id, email: user.email, id_level: user.id_level }, process.env.SECRET_KEY, { expiresIn: '24h' })
            const checkPassword = await bcrypt.compare(req.body.password, user.password)
            
            if(checkPassword){
                response.success(res, 200, { status: 200, message: 'success login', user: user, id_level: user.id_level, token: token })
            }else{
                response.failed(res, 400, NULL, { status: 400, message: 'invalid email or password' })
            }
        }).catch(err => {
            response.failed(res, 400, err, { status: 400, message: 'invalid email or password' })
        })
    },

    register: async(req, res) => {
        const user = {...req.body}
        const salt = await bcrypt.genSalt(10)
        user['password'] = await bcrypt.hash(user['password'], salt)
        delete user.rePassword

        userModel.postUser(user).then(responses => {
            userModel.getUserByEmail(user.email).then(async responses => {
                const newUser = responses[0]
                const token = jwt.sign({ id: newUser.id, email: newUser.email, id_level: newUser.id_level }, process.env.SECRET_KEY, { expiresIn: '24h' })
                response.success(res, 200, user, { token:token, user: newUser })
            })
        }).catch(err => {
            console.log(err)
            response.failed(res, 400, err, { message: 'err' })
        })
    }
}