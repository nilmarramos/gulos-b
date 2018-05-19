const express = require('express')
const orderController = require('../controllers/orderService')

const router = express.Router()

router.post('/', orderController.newOrder)

module.exports = router