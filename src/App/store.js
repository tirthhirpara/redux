import { configureStore } from '@reduxjs/toolkit'
import counterslice from '../counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter:counterslice,
  },
})