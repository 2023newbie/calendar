import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js'

const authUser = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
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
    res.statusCode = res.statusCode === 401 ? 401 : 500
    res.json({ msg: err.message })
  }
}

const registerUser = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body

  try {
    const existUser = await User.findOne({email})
    
    if (existUser) {
      res.status(400)
      throw new Error('User already exists.')
    }

    if (password !== confirmPassword) {
      res.status(400)
      throw new Error('Password and confirm password does not match.')
    }

    const user = await User.create({ name, email, password })

    generateToken(res, user._id)

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })

  } catch (err) {
    res.statusCode = res.statusCode === 400 ? 400 : 500
    res.json({ msg: err.message })
  }
}

export { authUser, registerUser }
