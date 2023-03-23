import React, { useEffect } from 'react'
import { Game } from '../../Interfaces/GameInterface'
import MiniButton from '../Home/Global/MiniButton'
import './Styles/GameObject.scss'

interface Props {
  game: Game
  idx: number
  handleGamePress: () => void
}

const GameObject: React.FC<Props> = ({ game, idx, handleGamePress }) => {
  useEffect(() => {
    if (game !== undefined && game.name !== undefined) {
      console.log(game.name)
    }
  })

  return (
    <div className='game-container'>
      <div className='game-name'>{game.name}</div>
      <MiniButton label='SELECT' icon='' handleButtonPress={() => handleGamePress()} />
    </div>
  )
}

export default GameObject
