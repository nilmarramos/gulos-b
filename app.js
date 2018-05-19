const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const { createInitialUser } = require('./controllers/login')
const login = require('./routes/login')
const products = require('./routes/products')
const categories = require('./routes/categories')
const flavors = require('./routes/flavor')
const socialMedia = require('./routes/coupons')
const orderService = require('./routes/orderService')
const dashboard = require('./routes/dashboard')

const port = process.env.PORT || 3001
const mongodb = process.env.MONGOLAB_URI || 'mongodb://192.168.99.100:32768/gulo'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

app.use('/dashboard', dashboard)
app.use('/guloAdmin', login)
app.use('/products', products)
app.use('/dashboard/categories', categories)
app.use('/dashboard/flavors', flavors)
app.use('/social-media', socialMedia)
app.use('/order', orderService)

app.get('/', (req, res) => {
	res.json({name: 'Guloseymas Mania'})
})

mongoose.connect(mongodb)
	.then( () => {
		createInitialUser()
		app.listen(port, () => console.log(`Server run port ${port}`))
	})
	.catch(err => console.log(err.message))
