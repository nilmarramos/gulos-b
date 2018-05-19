const express = require('express')
const categoryController = require('../controllers/categories')
const auth = require('../middleware/auth')

const router = express.Router()

router.use(auth)

router.get('/', categoryController.getAll)

router.post('/', categoryController.newCategory)

router.delete('/:id', categoryController.removeCat)

module.exports = router
