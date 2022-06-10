'use strict'

const router = require('express').Router()
const redirectController = require('../controller/redirectController')

router.get('/', redirectController)

module.exports = router