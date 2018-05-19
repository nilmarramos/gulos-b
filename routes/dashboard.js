const express = require('express')
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart();

const auth = require('../middleware/auth')
const login = require('../controllers/login')
const productController = require('../controllers/products')
const orderController = require('../controllers/orderService')
const couponController = require('../controllers/coupons')


const router = express.Router()

router.use(auth)

router.post('/', login.dashBoard)

router.post('/products', multipartMiddleware, productController.newProduct)

router.put('/products/:id', multipartMiddleware, productController.editProd)

router.delete('/products/:id', productController.removeProd)

// orderService

router.get('/order', orderController.getAll)

router.get('/order/:id', orderController.getOne)

router.delete('/order/:id', orderController.removeOrder)

//Coupons

router.get('/coupon', couponController.getAll)

router.get('/coupon/:id', couponController.getOne)

router.post('/coupon', multipartMiddleware, couponController.newCoupon)

router.put('/coupon/:id', multipartMiddleware, couponController.editCoupon)

router.delete('/coupon/:id', couponController.removeCoupon)

module.exports = router