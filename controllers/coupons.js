const Coupon = require('../models/coupons')
const Produtc = require('../models/products')

const getQuery = async(req, res) => {
	const {product} = req.query
	try {
		const dataCoup = await Coupon.find()
		const dataProd = await Produtc.find()
		const joinProducts = await dataProd.concat(dataCoup).filter(p => p.slug === product && p.isActive === true)

		res.json(joinProducts)
	}
	catch (e) {
		res.json(e.message)
	}
}

const getAll = async(req, res) => {
	const data = await Coupon.find({})
	res.json(data)
}

const getOne = async(req, res) => {
	try {
		const data = await Coupon.findById(req.params.id)
		await !!data ? res.json(data) : res.json({msg: 'Produto não encontrado'})
	}
	catch (e) {
		res.json(e.message)
	}
}

const newCoupon = async(req, res) => {
	const coupon = new Coupon(req.body)
		try {
			const data = await coupon.save()
			res.json(data)
		}
		catch (e) {
			res.json({errors: e.message})
		}
}

const editCoupon = async(req, res) => {
	try {
		const data = await Coupon.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
		await !!data ? res.json(data) : res.json({msg: 'Coupon não encontrado'})
	}
  catch (e) {
		res.json(e.message)
	}
}

const removeCoupon = async(req, res) => {
	try {
		const data = await Coupon.findByIdAndRemove(req.params.id)
		await !!data ? res.json({success: true}) : res.json({msg: 'Coupon não encontrado'})
	}
  catch (e) {
		res.json(e.message)
	}
}

module.exports = {
	getAll, getOne, getQuery, newCoupon, editCoupon, removeCoupon
}