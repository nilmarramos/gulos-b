const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')
const User = require('../models/user')

const signIn = async(req, res) => {
	const {email, password} = req.body
	try {
		const user = await User.findOne({email})
		if (user) {
			const payload = {
				id: user._id,
				email: user.email
			}
			const isValid = await user.checkPassword(password)
			if (isValid) {
				jwt.sign(payload, jwtSecret, (err, token) => {
					res.json({
						isAuthenticated: true,
						token
					})
				})
			}else {
				res.json({msg: 'user/pass invailid'})
			}
		}else {
			res.json({msg: 'user/pass invailid'})
		}
	}
	catch (e) {
		res.json(e.message)
	}
}

const dashBoard = async(req, res) => {
	const {token} = req.body
	try{
		if (token) {
			jwt.verify(token, jwtSecret)
			return res.json({success: true})
		}
			return res.json({success: false})
	}
	catch (e) {
		res.json(e.message)
	}
}

const createInitialUser = async() => {
	const total = await User .count({email: 'guloseymas@email.com'})
	if (total === 0) {
		const user = new User({
			email: 'guloseymas@email.com',
			password: 'nilmar220782'
		})
		await user.save()
	}
}

module.exports = {
	signIn, createInitialUser, dashBoard
}