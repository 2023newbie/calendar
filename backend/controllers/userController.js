import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

const authUser = async (req, res, next) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (user && (await User.matchPassowrd(password))) {
      generateToken(res, user._id)

      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(401)
      throw new Error('Invalid login credentials.')
    }
  } catch (err) {
    res.json({msg: err.message})
  } 
}

const registerUser = async (req, res, next) => {
  res.send('register success')
}

export {
  authUser,
  registerUser
}