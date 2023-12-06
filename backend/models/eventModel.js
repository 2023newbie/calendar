import mongoose from "mongoose"

const eventSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  timeStart: {
    type: Date,
    required: true
  },
  timeEnd: {
    type: Date,
    required: true
  },
  description: {
    type: String
  }
}, { timestamps: true })

const Event = mongoose.model('Event', eventSchema)
export default Event