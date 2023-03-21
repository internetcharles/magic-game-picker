/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react'
import { Game } from '../../Interfaces/GameInterface'
import { useAppSelector } from '../../Redux/hooks'
import Window from '../Home/Global/Window'
import GameObject from './GameObject'
import './Styles/GameSelect.scss'

const GameSelect: React.FC = () => {
  const gameData = useAppSelector((state) => state.genreGamesData)

  const [gamesToVoteOn, setGamesToVoteOn] = useState<number>(5)
  const [randomGames, setRandomGames] = useState<Game[]>([])

  useEffect(() => {
    getRandomGames()
  }, [])

  const getRandomGames = () => {
    const randomGames: Game[] = []
    while (randomGames.length < gamesToVoteOn) {
      const item = gameData.genreGames![Math.floor(Math.random() * gameData!.genreGames.length)]
      if (!randomGames.includes(item) && item.name !== undefined) {
        randomGames.push(item)
      }
    }
    setRandomGames(randomGames)
  }

  return (
    <Window label='GAMES' size='large-window'>
      <div className='game-select-game-container'>
        {randomGames.map((game, idx) => (
          <GameObject key={game.name} game={game} idx={idx} />
        ))}
      </div>
    </Window>
  )
}

export default GameSelect
