import React from 'react'
import { useNavigate } from 'react-router'
import { useAppSelector } from '../../Redux/hooks'
import MiniButton from '../Home/Global/MiniButton'
import Window from '../Home/Global/Window'
import './Styles/WinnerScreen.scss'

const WinnerScreen: React.FC = () => {
  const navigate = useNavigate()

  const selectedGameData = useAppSelector((state) => state.selectedGameData)

  const handleReset = () => {
    navigate('/')
  }

  return (
    <Window size='large-window' label='WINNER'>
      <div className='winner-screen-container'>
        <div className='winner-screen-title'>{selectedGameData.selectedGameData.name}</div>
        <MiniButton icon='' label='RESET' handleButtonPress={() => handleReset()} />
      </div>
    </Window>
  )
}

export default WinnerScreen
