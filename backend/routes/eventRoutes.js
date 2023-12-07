import express from 'express'
import {
  getEvent,
  addEvent,
  changeEvent,
  deleteEvent,
} from '../controllers/eventController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(protect, getEvent).post(protect, addEvent)

router.route('/:eventId').put(protect, changeEvent).delete(protect, deleteEvent)

export default router
