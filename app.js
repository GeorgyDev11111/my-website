'use strict'

// dependencies
const express = require('express')
const path = require('path')
const logger = require('morgan')
const router = require('./routes/index')

const app = express()
const PORT = 3000

// config
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

// middleware
app.use(logger('dev'))
app.use(express.static(path.resolve(__dirname,'public')))

// main route
app.use('/', router)

// start server
app.listen(PORT,() => console.log(`Server has been started: http://localhost:${PORT}`))