import React from 'react'
import { Game } from '../../../Interfaces/GameInterface'
import { CountObject } from '../../../Interfaces/VoteInterface'

interface Props {
  game: Game
  idx: number
  addVote: (idx: number) => void
  voteArray: CountObject[]
}

const GameObject: React.FC<Props> = ({ game, idx, addVote, voteArray }) => {
  return (
    <div key={game.name} className='home-game-item'>
      <div key={game.name}>{game.name}</div>
      <div onClick={() => addVote(idx)}>!vote{`${idx + 1}`}</div>
      <div>VOTE COUNT: {voteArray[idx].count}</div>
    </div>
  )
}

export default GameObject
