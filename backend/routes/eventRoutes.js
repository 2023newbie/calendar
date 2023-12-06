import express from 'express'
import { getEvent, addEvent, changeEvent, deleteEvent } from '../controllers/eventController.js'

const router = express.Router()

router.route('/').get(getEvent).post(addEvent).put(changeEvent).delete(deleteEvent)

export default router