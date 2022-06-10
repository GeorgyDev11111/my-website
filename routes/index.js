'use strict'

const router = require('express').Router()
const homeRoute = require('./homeRoute')
const redirectRoute = require('./redirectRoute')
const notFoundRoute = require('./notFoundRoute')
const descRouter = require('./descRouter')
const aboutRouter = require('./aboutRouter')

router.use('/',homeRoute )
router.use('/',redirectRoute)
router.use('/',descRouter )
router.use('/',aboutRouter)
router.use('/', notFoundRoute)

module.exports = router