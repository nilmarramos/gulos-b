const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	}
})

const Category = mongoose.model('categories', CategorySchema)

module.exports = Category