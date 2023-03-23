/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Game } from '../../Interfaces/GameInterface'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { setRandomGames } from '../../Redux/Reducers/randomGamesSlice'
import MiniButton from '../Home/Global/MiniButton'
import Window from '../Home/Global/Window'
import GameRevealObject from './GameRevealObject'

const GameReveal: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const gameData = useAppSelector((state) => state.genreGamesData)

  const [chosenGames, setChosenGames] = useState<Game[]>([])
  const [currentRevealedGameIdx, setCurrentRevealedGameIdx] = useState<number>(0)
  const [numberOfGamesToVoteOn, setNumberOfGamesToVoteOn] = useState<number>(5)

  useEffect(() => {
    getRandomGames()
  }, [])

  useEffect(() => {
    storeRandomGames()
  }, [chosenGames])

  const getRandomGames = () => {
    const randomGames: Game[] = []
    while (randomGames.length < numberOfGamesToVoteOn) {
      const item = gameData.genreGames![Math.floor(Math.random() * gameData!.genreGames.length)]
      if (!randomGames.includes(item) && item.name !== undefined) {
        randomGames.push(item)
      }
    }
    setChosenGames(randomGames)
  }

  const storeRandomGames = () => {
    dispatch(setRandomGames({ randomGames: chosenGames }))
  }

  const handleNextPress = () => {
    if (currentRevealedGameIdx < chosenGames.length - 1) {
      setCurrentRevealedGameIdx((idx) => idx + 1)
    } else {
      navigate('/game-screen')
    }
  }

  if (chosenGames.length === 0) return <div>LOADING</div>

  return (
    <Window size='large-window' label={`GAME ${currentRevealedGameIdx + 1}`}>
      <GameRevealObject
        handleNextPress={handleNextPress}
        game={chosenGames[currentRevealedGameIdx]}
      />
    </Window>
  )
}

export default GameReveal
