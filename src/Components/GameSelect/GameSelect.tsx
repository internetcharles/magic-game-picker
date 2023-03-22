/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Game } from '../../Interfaces/GameInterface'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { setSelectedGameData } from '../../Redux/Reducers/selectedGameSlice'
import Window from '../Home/Global/Window'
import GameObject from './GameObject'
import './Styles/GameSelect.scss'

const GameSelect: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const gameData = useAppSelector((state) => state.genreGamesData)

  const [numberOfGamesToVoteOn, setNumberOfGamesToVoteOn] = useState<number>(5)
  const [randomGames, setRandomGames] = useState<Game[]>([])
  const [selectedGame, setSelectedGame] = useState<Game>({
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
  })

  useEffect(() => {
    getRandomGames()
  }, [])

  useEffect(() => {
    if (selectedGame.name !== undefined) {
      dispatch(setSelectedGameData({ selectedGameData: selectedGame }))
      navigate('/winner-screen')
    }
  }, [selectedGame])

  const getRandomGames = () => {
    const randomGames: Game[] = []
    while (randomGames.length < numberOfGamesToVoteOn) {
      const item = gameData.genreGames![Math.floor(Math.random() * gameData!.genreGames.length)]
      if (!randomGames.includes(item) && item.name !== undefined) {
        randomGames.push(item)
      }
    }
    setRandomGames(randomGames)
  }

  const selectGame = (game: Game) => {
    setSelectedGame(game)
  }

  return (
    <Window label='GAMES' size='large-window'>
      <div className='game-select-container'>
        <div className='game-select-game-container'>
          {randomGames.map((game, idx) => (
            <GameObject
              handleGamePress={() => selectGame(game)}
              key={game.name}
              game={game}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </Window>
  )
}

export default GameSelect
