'use strict'

const router = require('express').Router()
const aboutController = require('../controller/aboutController')

router.get('/home/about', aboutController)

module.exports = router