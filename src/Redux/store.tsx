import { configureStore } from '@reduxjs/toolkit'
import { gameDataSlice } from './Reducers/gameDataSlice'
import { genreGamesSlice } from './Reducers/genreGamesSlice'
import { genreSlice } from './Reducers/genreSlice'
import { randomGamesSlice } from './Reducers/randomGamesSlice'
import { selectedGameDataSlice } from './Reducers/selectedGameSlice'

export const store = configureStore({
  reducer: {
    gameData: gameDataSlice.reducer,
    genreData: genreSlice.reducer,
    genreGamesData: genreGamesSlice.reducer,
    selectedGameData: selectedGameDataSlice.reducer,
    randomGamesData: randomGamesSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
