const express = require('express')
const loginController = require('../controllers/login')

const router = express.Router()

router.post('/', loginController.signIn)

module.exports = router