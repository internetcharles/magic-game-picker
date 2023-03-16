/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'
import { Game, GenreList, Genre } from '../../Interfaces/GameInterface'
import './Styles/Home.scss'

interface Props {
  genreData: GenreList
}

const Home: React.FC<Props> = ({ genreData }) => {
  const [randomGames, setRandomGames] = useState<Game[]>([])
  const [genresForVoting, setGenresForVoting] = useState<GenreList>([])
  const [chosenGenre, setChosenGenre] = useState<Game[] | undefined>([])

  const getThreeRandomGenres = () => {
    const chosenGenres: GenreList = []
    while (chosenGenres.length < 3) {
      const randomProperty = () => {
        const item = genreData[Math.floor(Math.random() * genreData.length)]
        return item
      }
      const genreItem = randomProperty()
      console.log(genreItem)
      if (!chosenGenres?.includes(genreItem)) chosenGenres.push(genreItem)
    }
    setGenresForVoting(chosenGenres)
  }

  const getRandomGames = () => {
    const randomGames: Game[] = []
    while (randomGames.length < 5) {
      const item = chosenGenre![Math.floor(Math.random() * chosenGenre!.length)]
      if (!randomGames.includes(item)) randomGames.push(item)
    }
    setRandomGames(randomGames)
  }

  return (
    <div className='home-container'>
      <button className='home-genre-select-button' onClick={() => getThreeRandomGenres()}>
        PICK THREE GENRES
      </button>
      <div className='home-item-container'>
        {genresForVoting.length > 0 &&
          genresForVoting.map((genre) => (
            <button key={genre.key} onClick={() => setChosenGenre(genre.data![genre.key])}>
              {genre.name}
            </button>
          ))}
      </div>
      <div className='home-button-container'>
        <button onClick={() => getRandomGames()}>Randomize</button>
      </div>
      <div>
        {randomGames.length > 0 &&
          randomGames.map((game) => <div key={game.name}>{game.name}</div>)}
      </div>
    </div>
  )
}

export default Home
