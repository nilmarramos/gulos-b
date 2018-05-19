const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

UserSchema.pre('save', function (next) {
	const user = this
	if (!user.isModified('password')) {
		return next()
	}
	bcrypt.genSalt((err, salt) => {
		bcrypt.hash(user.password, salt, (err, hash) => {
			user.password = hash
			next()
		})
	})
})

UserSchema.methods.checkPassword = function (password) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, this.password,(err, isMatch) => {
			if (err) {
				reject(err)
			}else {
				resolve(isMatch)
			}
		})
	})
}

const User = mongoose.model('user', UserSchema)

module.exports = User