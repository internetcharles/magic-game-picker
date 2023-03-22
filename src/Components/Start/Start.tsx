import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gamesByTag } from '../../Constants/genres'
import MiniButton from '../Home/Global/MiniButton'
import Window from '../Home/Global/Window'
import './Styles/Start.scss'

const Start: React.FC = () => {
  const navigate = useNavigate()

  const navigateToSystemSelect = () => {
    navigate('system-select')
  }

  useEffect(() => {
    console.log(gamesByTag())
  }, [])

  return (
    <Window size='small-window' label='MAGIC GAME PICKER'>
      <div className='start-container'>
        <div className='start-header'>Hello</div>
        <div className='start-description'>Welcome to the Magic Game Selector</div>
        <div className='start-description'>
          Press &apos;START&apos; to begin your gameplay journey.{' '}
        </div>
        <MiniButton icon='' label='START' handleButtonPress={() => navigateToSystemSelect()} />
      </div>
    </Window>
  )
}

export default Start
