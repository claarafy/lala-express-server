const
  mongoose = require('mongoose'),
  streetSchema = new mongoose.Schema({
    name: String,
  })
  locationSchema = new.mongoose.Schema({
    name: String,
    streets: [streetSchema]
  })

module.exports = mongoose.model('Location', locationSchema)
