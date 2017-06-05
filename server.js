const
  express = require('express'), //use express
  app = express(), //app variable with express
  logger = require('morgan'), //http request logs
  bodyParser = require('body-parser'), //json translation to usable dta
  mongoose = require('mongoose'), //mongodb
  cors = require('cors'), //allowing ajax from other domains
  usersRoutes = require('./routes/users.js'),
  parkingsRoutes = require('./routes/parkings.js'),
  mongoUrl = process.env.MONGO_URL ||'mongodb://localhost/lalastreets', //database URL
  PORT = process.env.PORT || 3001 //environment port


//mongodb connection
mongoose.connect(mongoUrl, (err) => {
  console.log(err || 'Connected to MongoDB:', mongoUrl)
})

//middleware
app.use(logger('dev')) //log all requests @console
app.use(cors()) //allow ajax requests from other domains
app.use(bodyParser.json()) //translate json pbodies
app.use(bodyParser.urlencoded({extended: false})) // interpret form data

//server root route
app.get('/', (req, res) => {
  res.json({message: "temporary root"})
})


//user routes
app.use('/api/users', usersRoutes)
app.use('/api/parkings', parkingsRoutes)

//server: listen for incoming http requests
app.listen(PORT, (err) => {
  console.log(err || "Server running on ", PORT)
})
