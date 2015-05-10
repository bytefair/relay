'use strict'

const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const pageSchema = new Schema(
  { title:
    { type: String
    , unique: true
    , required: true
    }
  , section:
    [{ type: String
     , required: true
    }]
  }
)

module.exports = mongoose.model('Page', pageSchema)
