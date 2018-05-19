const mongoose = require('mongoose')
const slugify = require('slugify-mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
	name: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		slug: 'name'
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String
	},
	img: {
		type: String,
		required: true
	},
	category: {
		type: String,		
		required: true
	},
	flavor: {
		type: [String]
	},
	isActive: {
		type: Boolean,
		default: true
	},
	created: {
		type: Date,
		default: Date.now
	}
})

ProductSchema.plugin(slugify)

const Product = mongoose.model('products', ProductSchema)

module.exports = Product