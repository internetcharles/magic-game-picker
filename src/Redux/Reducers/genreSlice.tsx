import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Genre } from '../../Interfaces/GenreInterface'
import { RootState } from '../store'

export interface GenreState {
  selectedGenre: Genre | null
}

const initialState: GenreState = {
  selectedGenre: null,
}

export const genreSlice = createSlice({
  name: 'genreData',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<GenreState>) => {
      return action.payload
    },
    resetGenre: (state) => {
      return initialState
    },
  },
})

export const { setGenre, resetGenre } = genreSlice.actions

export const selectGenre = (state: RootState) => state.genreData

export default genreSlice.reducer
