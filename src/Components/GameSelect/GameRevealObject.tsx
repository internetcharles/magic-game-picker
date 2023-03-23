import React from 'react'
import { Game } from '../../Interfaces/GameInterface'
import MiniButton from '../Home/Global/MiniButton'
import './Styles/GameRevealObject.scss'

interface Props {
  game: Game
  handleNextPress: () => void
}

const GameRevealObject: React.FC<Props> = ({ game, handleNextPress }) => {
  const shortDescription = () => {
    if (game.description !== undefined && game.description.length > 500) {
      return game.description[0].substring(0, 500)
    } else if (game.description !== undefined) {
      return game.description[0]
    }
  }

  return (
    <div className='game-reveal-container'>
      <div className='game-reveal-name'>{game.name}</div>
      <div>{game.developer !== undefined && game.developer.length !== 0 && game.developer[0]}</div>
      <div className='game-reveal-description-container'>
        <div className='game-reveal-description'>{shortDescription()}</div>
        <div>{game.trivia !== undefined && game.trivia.length > 1 && 'TRIVIA'}</div>
        <div>{game.trivia !== undefined && game.trivia[0]}</div>
        <div>{game.trivia !== undefined && game.trivia.length > 1 && game.trivia[1]}</div>
      </div>
      <div className='game-reveal-image-container'>
        {game.screenshots !== undefined && game.screenshots.length > 0 && (
          <img className='game-reveal-image' src={game.screenshots[0]} />
        )}
        {game.screenshots !== undefined && game.screenshots.length > 1 && (
          <img className='game-reveal-image' src={game.screenshots[1]} />
        )}
        {game.screenshots !== undefined && game.screenshots.length > 2 && (
          <img className='game-reveal-image' src={game.screenshots[2]} />
        )}
      </div>
      <div className='game-reveal-button-container'>
        <MiniButton label='Next' icon='' handleButtonPress={() => handleNextPress()} />
      </div>
    </div>
  )
}

export default GameRevealObject
