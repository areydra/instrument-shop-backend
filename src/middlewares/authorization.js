const jwt = require('jsonwebtoken')
// FIX tinggal pake
module.exports = {
	auth : (req, res, next) => {
		// console.log(req.headers('x-auth-token'))
	    //cek apakah ada header yg bernama 'x-auth-token'
	    if(!req.header('x-auth-token')){
		    res.status(403).send('Access forbidden')	
	    } else{
	        //jwt.verify(token, 'secret-key')
	        jwt.verify(req.header('x-auth-token'), process.env.SECRET_KEY, async(err, decode) => {
	        	if(err){
	        		res.status(403).send('Access forbidden')
	        	}else{    		
		        	if(decode.id_level === 1){
		        		next()
		        	}else{
			            res.status(403).send('Access Forbidden')
		        	}
	        	}
	        })
	        
	    }
    }
}