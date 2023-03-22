import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../Interfaces/GameInterface'
import { RootState } from '../store'

export interface SelectedGameState {
  selectedGameData: Game
}

const initialState: SelectedGameState = {
  selectedGameData: {
    cover: '',
    description: [],
    developer: [],
    'moby-id': '',
    'moby-link': '',
    name: '',
    publisher: [],
    release: '',
    screenshots: [],
    tags: [],
    trivia: [],
  },
}

export const selectedGameDataSlice = createSlice({
  name: 'selectedGameData',
  initialState,
  reducers: {
    setSelectedGameData: (state, action: PayloadAction<SelectedGameState>) => {
      return action.payload
    },
    resetSelectedGameData: (state) => {
      return initialState
    },
  },
})

export const { setSelectedGameData, resetSelectedGameData } = selectedGameDataSlice.actions

export const selectSelectedGameData = (state: RootState) => state.selectedGameData

export default selectedGameDataSlice.reducer
