const mongoose = require('mongoose')
const address = require('./address')

const Schema = mongoose.Schema

const OrderSchema = Schema({
	products: [],
	bairro: String,
	logradouro: String,
	name: String,
	phone: String,
	num: String,
	referencia: String,
	payment: String,
	total: String,
	
	created: {
		type: Date,
		default: Date.now
	}
})

const OrderService = mongoose.model('order', OrderSchema)

module.exports = OrderService