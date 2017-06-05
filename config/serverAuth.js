const
  jwt = require('jsonwebtoken'),
  jwtSecret = process.env.JWT_SECRET || 'lala'

const serverAuth = {
  //create a token using jwtSecret with any data inserted + expiration date in the payload
  createToken: function(data) {
    return jwt.sign(data, jwtSecret, {expiresIn: '7 days'})
  },
  //verify the token using jwtSecret
  verifyToken: function(token) {
    return jwt.verify(token, jwtSecret)
  },
  //middleware, before responding. purpose: authorizing routes unless it's a valid token
  authorize: function(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    if(!token) return res.status(403).json({success: false, message:"Invalid token or no token found."})

    const decoded = serverAuth.verifyToken(token)
    if(decoded) req.decoded = decoded //user

  next()
  }
}


module.exports = serverAuth
