'use strict'

// environment setup
require('dotenv').load()
const requireDir = require('require-dir')

// mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO)
mongoose.connection.on('error', function(err) {
  console.log(err)
})
requireDir('./models')

// express setup
const express = require('express')
    , serveStatic = require('serve-static')
    , compression = require('compression')

var app = express()

app.use(compression({ threshold: 1 }))

// helmet config
const helmet = require('helmet')
app.use(helmet())

// start the app
app.listen(process.env.PORT, function() {
  console.log('Relay listening on port ' + process.env.PORT)
})
