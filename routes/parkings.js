//Parking routes
const
  express = require('express'),
  parkingsRouter = new express.Router(),
  parkingsController = require('../controllers/parkings.js')
  Parking = require('../models/Parking.js')

parkingsRouter.route('/')
  .get(parkingsController.index)
  .post(parkingsController.create)

parkingsRouter.route('/:id')
  .get(parkingsController.show)
  .patch(parkingsController.update)
  .delete(parkingsController.destroy)



module.exports = parkingsRouter
