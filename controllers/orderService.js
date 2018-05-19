const Order = require('../models/orderSevice')

const getAll = async(req, res) => {
	try {
		const data = await Order.find()
		res.json(data)
	}catch (e) {
		res.json(e.message)
	}
}

const getOne = async(req, res) => {
	try {
		const data = await Order.findById(req.params.id)
		res.json(data)
	}catch (e) {
		res.json(e.message)
	}
}

const newOrder = async(req, res) => {
	const order = new Order(req.body)
	try {
		const data = await order.save()
		res.json(data)
	}
	catch (e) {
		res.json({errors: e.message})
	}
}

const removeOrder = async(req, res) => {
	try {
		 await Order.findByIdAndRemove(req.params.id)
		res.json({success: true})
	}catch (e) {
		res.json(e.message)
	}
}

module.exports = {
	getAll, getOne, newOrder, removeOrder
}