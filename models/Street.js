const
  mongoose = require('mongoose'),
  parkingSchema = new mongoose.Schema({
    timeLimit: String,
    availableTime: String,
    exceptionDay: String,
    streetCleaning: String,
    permit: Boolean
  })
  streetSchema = new mongoose.Schema({
    name: String,
    startingPoint: String,
    EndingPoint: String,
    location: [{type: mongoose.Schema.Types.ObjectID, ref: 'Location'}]
    parkings: [parkingSchema]
  })

module.exports = mongoose.model('Street', streetSchema)
