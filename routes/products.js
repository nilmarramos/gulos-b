const express = require('express')

const productController = require('../controllers/products')

const router = express.Router()

router.get('/', productController.getAll)
router.get('/search', productController.search)
router.get('/category/:cat', productController.getCategory)

router.get('/:id', productController.getOne)

module.exports = router