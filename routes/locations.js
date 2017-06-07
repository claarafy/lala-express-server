//Locations routes
const
  express = require('express'),
  locationsRouter = new express.Router(),
  locationsController = require('../controllers/locations.js'),
  parkingsController = require('../controllers/parkings.js'),
  Location = require('../models/Location.js')

/////////////////////////////location routes
locationsRouter.route('/')
  .get(locationsController.index)
  .post(locationsController.create)

locationsRouter.route('/:locationId')
  .get(locationsController.show)
  .patch(locationsController.update)
  .delete(locationsController.destroy)

/////////////////////////////locations' parking routes
locationsRouter.route('/:locationId/parkings')
  .post(parkingsController.create)
  .get(parkingsController.index)

locationsRouter.route('/:locationId/parkings/:parkingId')
  .get(parkingsController.show)
  .patch(parkingsController.update)
  .delete(parkingsController.destroy)

module.exports = locationsRouter
