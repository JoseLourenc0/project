const express = require('express')
const router = express.Router()
const controller = require('../../controller/device/controller')

router.get('/', controller.getAll)

module.exports = router