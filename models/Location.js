const
  mongoose = require('mongoose'),
  parkingSchema = new mongoose.Schema({
    streetName: String,
    startingPoint: Array,
    endingPoint: Array,
    timeLimit: String,
    availableTime: String,
    exceptionDay: String,
    streetCleaning: String,
    permit: Boolean,
  })
  locationSchema = new.mongoose.Schema({
    name: String,
    lngLat: Array,
    parkings: [parkingSchema]
  })

module.exports = mongoose.model('Location', locationSchema)
