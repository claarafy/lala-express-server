//Location controller
const
  Location = require('../models/Location.js'),
  Parking = require('../models/Parking.js'),
  geocoder = require('geocoder')

module.exports = {
  index: (req, res) => {
    Location.find({}, (err, locations) => {
      if(err) return error
      res.json(locations)
    })
  },

  show: (req, res) => {
    Location.findById(req.params.locationId, (err, location) => {
      if(err) return err
      res.json(location)
    })
  },

  create: (req, res) => {
    Location.create(req.body, (err, location) => {
      if(err) return err
      res.json({success: true, message:"New location created.", location})
    })
  },

  update: (req, res) => {
    Location.findById(req.params.locationId, (err, location) => {
      if(err) return err
      Object.assign(location, req.body)
      location.save((err) => {
        res.json({success:true, message:"Location updated", location: location})
      })
    })
  },

  destroy: (req, res) => {
    Location.findByIdAndRemove(req.params.locationId, (err,location) => {
      if(err) return err
      res.json({success:true, message: "Location deleted."})
    })
  }
}
