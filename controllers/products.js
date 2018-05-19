const Product = require('../models/products')
const Coupon = require('../models/coupons')

const search = async(req, res) => {
	try {
		const data = await Product.find()
		const product = await data.filter(p => p.isActive === true )
		res.json(product)
	}
	catch (e) {
		res.json(e.message)
	}
}

const getAll = async(req, res) => {
	try {
		const data = await Product.find()
		res.json(data)
	}
	catch (e) {
		res.json(e.message)
	}
}

const getCategory = async(req, res) => {
	const {cat} = req.params
	try{
		const dataCat = await Product.find()
		const category = await dataCat.filter(c => c.category === cat && c.isActive === true )
		res.json(category)
	}
	catch (e) {
		res.json(e.message)
	}
}

const getOne = async(req, res) => {
	try {
		const data = await Product.findById(req.params.id)
		await !!data ? res.json(data) : res.json({msg: 'Produto não encontrado'})
	}
	catch (e) {
		res.json(e.message)
	}
}

const newProduct = async(req, res) => {
	const product = new Product(req.body)
		try {
			const data = await product.save()
			res.json(data)
		}
		catch (e) {
			res.json({errors: e.message})
		}
}

const editProd = async(req, res) => {
	try {
		const data = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
		await !!data ? res.json(data) : res.json({msg: 'Produto não encontrado'})
	}
	catch (e) {
		res.json(e.message)
	}
}

const removeProd =async(req, res) => {
	try {
		const data = await Product.findByIdAndRemove(req.params.id)
		await !!data ? res.json({success: true}) : res.json({msg: 'Produto não encontrado'})
	}
	catch (e) {
		res.json(e.message)
	}
}

module.exports = {
	search, getAll, getCategory, getOne, newProduct, editProd, removeProd
}