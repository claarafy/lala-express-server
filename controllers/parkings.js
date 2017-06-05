//Parking controller
const
  Parking = require('../models/Parking.js')

module.exports = {
  index: (req, res) => {
    Parking.find({}, (err, parkings) => {
      if(err) return err
      res.json(parkings)
    })
  },

  show: (req, res) => {
    Parking.findById(req.params.id, (err,parking) => {
      if(err) return err
      res.json(parking)
    })
  },

  create: (req, res) => {
    Parking.create(req.body, (err, parking) => {
      if(err) return err
      res.json({success: true, message: "Parking sign created.", parking})
    })
  },

  update: (req, res) => {
    Parking.findById(req.params.id, (err, parking) => {
      if(err) return err
      Object.assign(parking, req.body)
      parking.save((err) => {
        res.json({success: true, message: "Parking sign updated.", parking: parking})
      })
    })
  },

  destroy: (req, res) => {
    Parking.findByIdAndRemove(req.params.id, (err, parking) => {
      if(err) return err
      res.json({success:true, message: "Parking sign deleted."})
    })
  }
}
