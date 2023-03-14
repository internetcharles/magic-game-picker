/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'
import { Game, GenreList } from '../../Interfaces/GameInterface'
import './Styles/Home.scss'

interface Props {
  genreData: GenreList
}

const Home: React.FC<Props> = ({ genreData }) => {
  const [randomGames, setRandomGames] = useState<Game[]>([])
  const [genresForVoting, setGenresForVoting] = useState<string[]>([])
  const [chosenGenre, setChosenGenre] = useState<string>('')

  useEffect(() => {
    getThreeRandomGenres()
  }, [])

  const getThreeRandomGenres = () => {
    const chosenGenres: string[] = []
    const keys = Object.keys(genreData)
    while (chosenGenres.length < 3) {
      const randomProperty = () => {
        const r = Math.floor(keys.length * Math.random()) + 1
        const randomKey = keys[r]
        return randomKey
      }
      const newGenre = randomProperty()
      if (!chosenGenres.includes(newGenre)) {
        chosenGenres.push(newGenre)
      }
    }
    setGenresForVoting(chosenGenres)
  }

  const getRandomGames = (key: string) => {
    const gameList: any = genreData[key as keyof Genre].name
    const randomArray: Game[] = []
    while (randomArray.length < 3) {
      const r = Math.floor(Math.random() * gameList.length)
      if (!randomArray.includes(gameList[r])) {
        randomArray.push(gameList[r])
      }
    }
    console.log(randomArray)
    setRandomGames(randomArray)
  }

  return (
    <div className='home-container'>
      <div className='home-item-container'>
        {genresForVoting.map((genre) => (
          <button key={genre} onClick={() => setChosenGenre(genreData[genre as keyof Genre].name)}>
            {genre}
          </button>
        ))}
      </div>
      <div className='home-button-container'>
        <button onClick={() => getRandomGames(chosenGenre)}>Randomize</button>
      </div>
      <div>
        {randomGames.length > 0 &&
          randomGames.map((game) => <div key={game.name}>{game.name}</div>)}
      </div>
    </div>
  )
}

export default Home
