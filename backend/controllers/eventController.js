import Event from '../models/eventModel.js'

const getEvent = async (req, res, next) => {
  try {
    const events = await Event.find({ userId: req.user._id })
    res.status(200).json(events)
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong. Please try again.' })
  }
}

const addEvent = async (req, res, next) => {
  const { title, timeStart, timeEnd, description } = req.body
  const userId = req.user._id

  try {
    const event = await Event.create({
      userId,
      title,
      timeStart,
      timeEnd,
      description,
    })
    res.status(201).json(event)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

const changeEvent = async (req, res, next) => {
  res.send('change event')
}

const deleteEvent = async (req, res, next) => {
  try {
    await Event.findByIdAndDelete(req.params.eventId)
    res.status(200).json({ msg: 'Operation successful!' })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

export { getEvent, addEvent, changeEvent, deleteEvent }
