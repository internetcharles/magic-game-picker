import { configureStore } from '@reduxjs/toolkit'
import { gameDataSlice } from './Reducers/gameDataSlice'
import { genreGamesSlice } from './Reducers/genreGamesSlice'
import { genreSlice } from './Reducers/genreSlice'

export const store = configureStore({
  reducer: {
    gameData: gameDataSlice.reducer,
    genreData: genreSlice.reducer,
    genreGamesData: genreGamesSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
