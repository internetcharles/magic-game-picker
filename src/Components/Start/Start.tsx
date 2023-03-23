import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../Redux/hooks'
import { resetGameData } from '../../Redux/Reducers/gameDataSlice'
import { resetGenreGames } from '../../Redux/Reducers/genreGamesSlice'
import { resetGenre } from '../../Redux/Reducers/genreSlice'
import { resetRandomGames } from '../../Redux/Reducers/randomGamesSlice'
import { resetSelectedGameData } from '../../Redux/Reducers/selectedGameSlice'
import MiniButton from '../Home/Global/MiniButton'
import Window from '../Home/Global/Window'
import './Styles/Start.scss'

const Start: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetGameData())
    dispatch(resetGenre())
    dispatch(resetGenreGames())
    dispatch(resetSelectedGameData())
    dispatch(resetRandomGames())
  }, [])

  const navigateToSystemSelect = () => {
    navigate('system-select')
  }
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
