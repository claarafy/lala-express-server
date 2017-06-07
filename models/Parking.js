//Parking model
const
  mongoose = require('mongoose'),
  parkingSchema = new mongoose.Schema({
    streetName: String,
    startCoordinates: Array,
    endCoordinates: Array,
    timeLimit: Number,
    availableTime: String,
    meterParking: Boolean,
    streetCleaning: String,
    noParking: Boolean,

    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location'}
  })

module.exports = mongoose.model('Parking', parkingSchema)
