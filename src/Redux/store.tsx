import { configureStore } from '@reduxjs/toolkit'
import { gameDataSlice } from './Reducers/gameDataSlice'

export const store = configureStore({
  reducer: {
    gameData: gameDataSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
