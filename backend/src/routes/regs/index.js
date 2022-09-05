const express = require('express')
const router = express.Router()
const controller = require('../../controller/reg/controller')

router.get('/:id', controller.getByDeviceId)
router.post('/', controller.insert)

module.exports = router