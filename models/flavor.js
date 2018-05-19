const mongoose = require('mongoose')

const FlavorSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	}
})

const Flavor = mongoose.model('flavor', FlavorSchema)

module.exports = Flavor