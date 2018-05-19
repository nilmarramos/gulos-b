const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AddressSchema = Schema({
	client: String,
	phone: Number,
	rua: String,
	bairro: String,
	num: Number,
	refer: String
})
module.exports = AddressSchema