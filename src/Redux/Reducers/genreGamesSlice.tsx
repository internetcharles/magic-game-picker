import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../Interfaces/GameInterface'
import { RootState } from '../store'

export interface GenreGamesState {
  genreGames: Game[]
}

const initialState: GenreGamesState = {
  genreGames: [],
}

export const genreGamesSlice = createSlice({
  name: 'genreGamesData',
  initialState,
  reducers: {
    setGenreGames: (state, action: PayloadAction<GenreGamesState>) => {
      return action.payload
    },
    resetGenreGames: (state) => {
      return initialState
    },
  },
})

export const { setGenreGames, resetGenreGames } = genreGamesSlice.actions

export const selectGenreGames = (state: RootState) => state.genreGamesData

export default genreGamesSlice.reducer
