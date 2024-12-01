import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./reducers/CounterSlicer.js"

export const Store = configureStore({
  reducer: {
    counter: counterReducer
  }
})