const
  mongoose = require('mongoose'),
  parkingSchema = new mongoose.Schema({
    timeLimit: String,
    availableTime: String,
    exceptionDay: String,
    streetCleaning: String,
    permit: Boolean,
    street: [{type: mongoose,SchemaTyes.ObjectID, ref: 'Street'}]
  })

module.exports = mongoose.model('Parking', parkingSchema)
