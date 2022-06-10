'use strict'

const router = require('express').Router()
const descController = require('../controller/descController')

router.get('/home/desc', descController)

module.exports = router