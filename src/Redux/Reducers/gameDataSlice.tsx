import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Genre } from '../../Interfaces/GenreInterface'
import { RootState } from '../store'

export interface GameDataState {
  consoleData: Genre[]
}

const initialState: GameDataState = {
  consoleData: [
    {
      data: {
        slug: [],
      },
      name: 'None',
      key: 'none',
    },
  ],
}

export const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {
    setGameData: (state, action: PayloadAction<GameDataState>) => {
      return action.payload
    },
    resetGameData: (state) => {
      return initialState
    },
  },
})

export const { setGameData, resetGameData } = gameDataSlice.actions

export const selectGameData = (state: RootState) => state.gameData

export default gameDataSlice.reducer
