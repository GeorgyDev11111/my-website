'use strict'

const router = require('express').Router()
const notFoundController = require('../controller/notFoundController')

router.get('*', notFoundController)

module.exports = router