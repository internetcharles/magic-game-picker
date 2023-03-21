import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Genre } from '../../Interfaces/GenreInterface'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { setGenreGames } from '../../Redux/Reducers/genreGamesSlice'
import { resetGenre, setGenre } from '../../Redux/Reducers/genreSlice'
import Window from '../Home/Global/Window'
import GenreItem from './GenreItem'
import './Styles/GenreScreen.scss'

const GenreScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const gameData = useAppSelector((state) => state.gameData)
  const [genreList, setGenreList] = useState<Genre[]>([])
  const [genresForVoting, setGenresForVoting] = useState<Genre[]>([])
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [winnerRevealed, setWinnerRevealed] = useState<boolean>(false)

  useEffect(() => {
    const genreMap = gameData.consoleData.map((genre) => {
      return { name: genre.name, key: genre.key }
    })
    console.log(gameData)
    setGenreList(genreMap)
    dispatch(resetGenre())
  }, [])

  useEffect(() => {
    if (genreList.length > 0) {
      getThreeRandomGenres()
    }
  }, [genreList])

  useEffect(() => {
    if (selectedGenre !== null) {
      dispatch(setGenre({ selectedGenre: selectedGenre }))
      revealWinner()
    }
  }, [selectedGenre])

  const getThreeRandomGenres = () => {
    const chosenGenres: Genre[] = []
    while (chosenGenres.length < 3) {
      const randomProperty = () => {
        const item = genreList[Math.floor(Math.random() * genreList.length)]
        return item
      }
      const genreItem = randomProperty()
      if (!chosenGenres?.includes(genreItem)) chosenGenres.push(genreItem)
    }
    setGenresForVoting(chosenGenres)
  }

  const selectGenre = (chosenGenre: Genre) => {
    setSelectedGenre(chosenGenre)
  }

  const revealWinner = () => {
    setWinnerRevealed(true)
    if (selectedGenre !== null && selectedGenre.key !== undefined) {
      const selectedGenreGames = gameData.consoleData.find((game) => {
        if (selectedGenre.key !== undefined && game.key === selectedGenre.key && game.data) {
          return game.data[selectedGenre.key as keyof typeof game.data]
        }
      })

      if (selectedGenreGames !== undefined && selectedGenreGames.data !== undefined) {
        dispatch(
          setGenreGames({
            genreGames:
              selectedGenreGames.data[selectedGenre.key as keyof typeof selectedGenreGames.data],
          }),
        )
      }
    }
    setTimeout(() => {
      navigate('/game-screen')
    }, 5000)
  }

  if (winnerRevealed)
    return (
      <Window label='WINNER' size='small-window'>
        <div className='genre-screen-winner-container'>
          <div className='genre-screen-winner-header'>WINNER</div>
          <div className='genre-screen-winner-genre'>{selectedGenre && selectedGenre.name}</div>
        </div>
      </Window>
    )

  return (
    <Window size='large-window' label='GENRES'>
      <div className='genre-screen-container'>
        <div className='genre-screen-item-container'>
          {genresForVoting.length > 0 &&
            genresForVoting.map((genre, idx) => (
              <GenreItem
                handleButtonPress={() => selectGenre(genre)}
                key={genre.name}
                name={genre.name}
                idx={idx}
              />
            ))}
        </div>
        <div className='genre-screen-timer-container'>
          <div className='genre-screen-timer-header'>TIMER</div>
          <div className='genre-screen-timer-number'>60</div>
        </div>
      </div>
    </Window>
  )
}

export default GenreScreen
