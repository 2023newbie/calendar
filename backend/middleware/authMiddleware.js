import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = async (req, res, next) => {
  let token = req.cookies.jwt
  try {
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.userId).select('-password')
        next()
      } catch (err) {
        res.status(401)
        throw new Error('Invalid token signature.')
      }
    } else {
      res.status(401)
      throw new Error('Not authorized, no token.')
    }
  } catch (err) {
    res.statusCode = res.statusCode === 401 ? 401 : 500
    res.json({msg: err.message})
  }
}

export { protect }