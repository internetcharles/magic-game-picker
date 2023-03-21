import React, { useEffect, useState } from 'react'
import { Genre } from '../../Interfaces/GenreInterface'
import { useAppSelector } from '../../Redux/hooks'
import Window from '../Home/Global/Window'
import GenreItem from './GenreItem'
import './Styles/GenreScreen.scss'

const GenreScreen: React.FC = () => {
  const gameData = useAppSelector((state) => state.gameData)
  const [genreList, setGenreList] = useState<Genre[]>([])
  const [genresForVoting, setGenresForVoting] = useState<Genre[]>([])

  useEffect(() => {
    const genreMap = gameData.consoleData.map((genre) => {
      return { name: genre.name, key: genre.key }
    })
    setGenreList(genreMap)
  }, [])

  useEffect(() => {
    if (genreList.length > 0) {
      getThreeRandomGenres()
    }
  }, [genreList])

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

  return (
    <Window size='large-window' label='GENRES'>
      <div className='genre-screen-container'>
        <div className='genre-screen-item-container'>
          {genresForVoting.length > 0 &&
            genresForVoting.map((genre, idx) => (
              <GenreItem key={genre.name} name={genre.name} idx={idx} />
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
