import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GenreItem } from '../../Constants/genres'
import { RootState } from '../store'

export interface GameDataState {
  consoleData: GenreItem[]
}

const initialState: GameDataState = {
  consoleData: [
    {
      data: undefined,
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
