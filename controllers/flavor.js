const Flavor = require('../models/flavor')

const getAll = async(req, res) => {
	const data = await Flavor.find({})
	res.json(data)
}

const newFlavor = async(req, res) => {
	const flavor = new Flavor( req.body )
	try {
		await flavor.save()
		res.json({ success: true })
	}
	catch (e) {
		res.json({errors: e.message})
	}
}

const removeFlavor = async(req, res) => {
	try {
		await Flavor.findByIdAndRemove(req.params.id)
		console.log(req.paramas.id)
		res.json({success: true})
	}catch (e) {
		res.json(e.message)
	}
}

module.exports = {
	getAll, newFlavor, removeFlavor
}