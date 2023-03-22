import React from 'react'
import { Game } from '../../Interfaces/GameInterface'
import './Styles/GameObject.scss'

interface Props {
  game: Game
  idx: number
  handleGamePress: () => void
}

const GameObject: React.FC<Props> = ({ game, idx, handleGamePress }) => {
  return (
    <div onClick={() => handleGamePress()} className='game-container'>
      <div className='game-name'>{game.name}</div>
      <div className='game-vote'>!vote{idx}</div>
    </div>
  )
}

export default GameObject
