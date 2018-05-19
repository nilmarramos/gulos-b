const express = require('express')
const couponController = require('../controllers/coupons')

const router = express.Router()

router.get('/', couponController.getQuery)

module.exports = router