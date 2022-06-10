'use strict'

const router = require('express').Router()
const homeController = require('../controller/homeController')

router.get('/home', homeController)

module.exports = router