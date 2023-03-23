import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../Interfaces/GameInterface'
import { RootState } from '../store'

export interface RandomGamesState {
  randomGames: Game[]
}

const initialState: RandomGamesState = {
  randomGames: [],
}

export const randomGamesSlice = createSlice({
  name: 'randomGamesData',
  initialState,
  reducers: {
    setRandomGames: (state, action: PayloadAction<RandomGamesState>) => {
      return action.payload
    },
    resetRandomGames: (state) => {
      return initialState
    },
  },
})

export const { setRandomGames, resetRandomGames } = randomGamesSlice.actions

export const selectRandomGames = (state: RootState) => state.randomGamesData

export default randomGamesSlice.reducer
