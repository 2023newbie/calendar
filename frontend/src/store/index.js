import { configureStore} from '@reduxjs/toolkit'
import pointDaySlice from './pointDay'
import modalSlice from './modal'

const store = configureStore({
  reducer: {
    pointDay: pointDaySlice.reducer,
    modal: modalSlice.reducer
  }
})

export default store