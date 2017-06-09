//Parking controller
const
  Parking = require('../models/Parking.js'),
  Location = require('../models/Location.js')

module.exports = {
  index: (req, res) => {
  Location.findById(req.params.locationId, (err, location) => {
    Parking.find({}, (err, parkings) => {
      if(err) return err
      res.json(parkings)
    })
  })
  },

  show: (req, res) => {
    Parking.findById(req.params.parkingId, (err,parking) => {
      if(err) return err
      res.json(parking)
    })
  },

  create: (req, res) => {
    Location.findById(req.params.locationId, (err, location) => {
      const newParking = new Parking(req.body)
      newParking.location = location
      newParking.save((err, parking) => {
        location.parkings.push(parking)
        location.save((err, location) => {
          Location.populate(location, {path:'parkings'}, (err, parking) => {
            res.json({succes:true, message:"New parking sign created.", parking})
          })
        })
      })
    })
  },

  update: (req, res) => {
    Location.findById(req.params.locationId, (err, location) => {
      const parkingToEdit = Parking.findById(req.params.parkingId, (err, parking) => {
        Object.assign(parking, req.body)
        parking.save((err) => {
          res.json({success: true, message: "Parking sign updated.", parking: parking})
        })
      })
    })
  },

  destroy: (req, res) => {
    Location.findById(req.params.locationId, (err, location) => {
      Parking.findByIdAndRemove(req.params.parkingId, (err, parking) => {
        var deleteIndex = location.parkings.indexOf(req.params.parkingId)
        console.log(deleteIndex)
        location.parkings.splice(deleteIndex, 1)
        location.save((err,location) => {
          if(err) return err
          res.json({success:true, message: "Parking sign deleted from location and parking."})
        })
      })
    })
  }
}
