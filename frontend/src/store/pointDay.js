import { createSlice } from "@reduxjs/toolkit"
import dayjs from 'dayjs'

const today = dayjs().toDate().toString()

const pointDaySlice = createSlice({
  name: 'pointDay',
  initialState: today,
  reducers: {
    pickDay (state, action) {
      state = action.payload
      return state
    }
  }
})

export const { pickDay } = pointDaySlice.actions

export default pointDaySlice