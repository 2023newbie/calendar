import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import eventRoutes from './routes/eventRoutes.js'

dotenv.config()
connectDB()
const port = process.env.PORT || 5000 

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoutes)
app.use('/api/events', eventRoutes)

app.listen(port, () => {
  console.log('App works')
})
