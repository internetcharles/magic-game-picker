/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'
import { Genre, GENRES } from '../../Constants/genres'
import { Game } from '../../Interfaces/GameInterface'
import './Styles/Home.scss'

interface Props {
  data: {
    Adventure: Game[]
    Arcade: Game[]
    'Board Game': Game[]
    Fighting: Game[]
    'Hack and Slash/Beat em up': Game[]
    Music: Game[]
    'No Genre': Game[]
    Pinball: Game[]
    Platform: Game[]
    'Point and Click': Game[]
    Puzzle: Game[]
    'Quiz/Trivia': Game[]
    Racing: Game[]
    'Real Time Strategy': Game[]
    RPG: Game[]
    Shooter: Game[]
    Simulator: Game[]
    Sport: Game[]
    Strategy: Game[]
    Tactical: Game[]
    'Turn Based Strategy': Game[]
    'Visual Novel': Game[]
  }
}

const Home: React.FC<Props> = ({ data }) => {
  const [randomGames, setRandomGames] = useState<Game[]>([])
  const [genresForVoting, setGenresForVoting] = useState<string[]>([])
  const [chosenGenre, setChosenGenre] = useState<string>('')

  useEffect(() => {
    getThreeRandomGenres()
  }, [])

  const getThreeRandomGenres = () => {
    const chosenGenres: string[] = []
    const keys = Object.keys(GENRES)
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
    const gameList = data[key as keyof Genre]
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
          <button key={genre} onClick={() => setChosenGenre(GENRES[genre as keyof Genre])}>
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
