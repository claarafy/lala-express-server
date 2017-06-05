const
  mongoose = require('mongoose'),
  parkingSchema = new mongoose.Schema({
    streetName: String,
    startLngLat: Array,
    endLngLat: Array,
    timeLimit: String,
    availableTime: String,
    exceptionDay: String,
    streetCleaning: String,
    permit: Boolean,
    Location: [{type: mongoose,SchemaTyes.ObjectID, ref: 'Location'}]
  })

module.exports = mongoose.model('Parking', parkingSchema)
