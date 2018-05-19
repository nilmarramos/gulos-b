const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../.env')

const auth = async(req, res, next) => {
	const token = req.headers['x-access-token']
	if (token) {
		try {
			jwt.verify(token, jwtSecret)
			next()
		}catch (e) {
			res.json({msg: 'not authorized'})
		}
	}else {
		res.json({msg: 'not authorized'})
	}
}

module.exports = auth