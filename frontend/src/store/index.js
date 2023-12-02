import { configureStore} from '@reduxjs/toolkit'
import pointDaySlice from './pointDay'

const store = configureStore({
  reducer: {
    pointDay: pointDaySlice.reducer
  }
})

export default store