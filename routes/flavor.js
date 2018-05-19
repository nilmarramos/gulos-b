const express = require('express')
const flavorController = require('../controllers/flavor')
const auth = require('../middleware/auth')

const router = express.Router()

router.use(auth)

router.get('/', flavorController.getAll)

router.post('/', flavorController.newFlavor)

router.delete('/:id', flavorController.removeFlavor)

module.exports = router
