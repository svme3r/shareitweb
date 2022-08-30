import { configureStore } from '@reduxjs/toolkit'
import Leagues from '../reducers/Leagues'
import Stories from '../reducers/Stories'
// import Stories from '../reducers/Stories'
// import Stories from '../reducers/Stories'

export const store = configureStore({
  reducer: {
    story: Stories,
    leagues: Leagues
  },
})