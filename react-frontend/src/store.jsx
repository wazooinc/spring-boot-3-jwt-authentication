import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './tokenSlice'

export default configureStore({
  reducer: {
    token: tokenReducer,
  },

})