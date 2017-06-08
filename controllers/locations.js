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
    Location.findById(req.params.locationId).populate('parkings').exec((err, location) => {
      if(err) return err
      res.json(location)
    })
  },

  create: (req, res) => {
    console.log("from server, logging the request", req.body.name, req.body.coordinates) //req.body.name= city name or address
    var location
    Location.findOne({name: req.body.name}, (err, location) => {
      if(location) {
        console.log("this location already exists in the data")
        // location = location
        return res.json({success: true, message: "this location already exists in the data", location})
      } else {
        console.log("create else reached")
        geocoder.geocode(req.body.name, (err, convertedAddress) => {
          console.log(convertedAddress.results[0].geometry.location)
          req.body.coordinates.push(convertedAddress.results[0].geometry.location.lng)
          req.body.coordinates.push(convertedAddress.results[0].geometry.location.lat)

          const completeLocation = req.body

          Location.create(completeLocation, (err, location) => {
            if(err) return err
            console.log("complete location is", location)
            // location = location
            return res.json({success: true, message:"New location created.", location})
          })
        })
      }
      // res.json({success: true, message:"New location created.", location})
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
