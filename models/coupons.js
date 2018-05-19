const mongoose = require('mongoose')
const slugify = require('slugify-mongoose')
const CouponSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		uppercase: true,
		unique: true
	},
	slug: {
		type: String,
		slug: 'name'
	},
	qts: {
		type: Number,
		default: 1
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	img: {
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

CouponSchema.plugin(slugify)

const Coupon = mongoose.model('coupons', CouponSchema)

module.exports = Coupon