import Event from '../models/eventModel'

const getEvent = async (req, res, next) => {
  try {
    const events = Event.find({userId: req.user._id})
    resstatus(200).json(events)
  } catch (err) {
    res.status(500).json({msg: 'Something went wrong. Please try again.'})
  }
}

const addEvent = async (req, res, next) => {
  res.send('add event')
}

const changeEvent = async (req, res, next) => {
  res.send('change event')
}

const deleteEvent = async (req, res, next) => {
  res.send('delete event')
}

export {
  getEvent,
  addEvent,
  changeEvent,
  deleteEvent
}