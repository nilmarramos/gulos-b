const Category = require('../models/categories')

const getAll = async(req, res) => {
	const data = await Category.find({})
	res.json(data)
}

const newCategory = async(req, res) => {
	const category = new Category( req.body )
	try {
		await category.save()
		res.json({ success: true })
	}
	catch (e) {
		res.json({errors: e.message})
	}
}

const removeCat = async(req, res) => {
	try {
		await Category.findByIdAndRemove(req.params.id)
		console.log(req.paramas.id)
		res.json({success: true})
	}catch (e) {
		res.json(e.message)
	}
}

module.exports = {
	getAll, newCategory, removeCat
}