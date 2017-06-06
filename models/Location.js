const
  mongoose = require('mongoose'),

  locationSchema = new mongoose.Schema({
    name: String,
    coordinates: Array,
    parkings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Parking'}]
  })

module.exports = mongoose.model('Location', locationSchema)
