import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./reducers/UserReducer.js"
import ProductReducer from './reducers/ProductReducer.js'
import  CommentReducer from '../demo/reducers/commentSlice.js'

export const Store = configureStore({
  reducer: {
    UserReducer:UserReducer,
    ProductReducer : ProductReducer,
    CommentReducer : CommentReducer
  },
})