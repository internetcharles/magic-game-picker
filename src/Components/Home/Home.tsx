/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import { Game, GenreList } from '../../Interfaces/GameInterface'
import { CountObject } from '../../Interfaces/VoteInterface'
import './Styles/Home.scss'

interface Props {
  genreData: GenreList
}

const Home: React.FC<Props> = ({ genreData }) => {
  const [gamesToVoteOn, setGamesToVoteOn] = useState<number>(5)
  const [randomGames, setRandomGames] = useState<Game[]>([])
  const [genresForVoting, setGenresForVoting] = useState<GenreList>([])
  const [chosenGenre, setChosenGenre] = useState<Game[]>([])
  const [voteArray, setVoteArray] = useState<CountObject[]>([])
  const [winner, setWinner] = useState<CountObject | null>(null)

  const validateNumberInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    if (target.value == '') {
      setGamesToVoteOn(0)
    } else if (parseInt(target.value) > 10) {
      setGamesToVoteOn(10)
    } else {
      setGamesToVoteOn((v) => (target.validity.valid ? parseInt(target.value) : v))
    }
  }

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
    console.log(gamesToVoteOn)
  }

  const getRandomGames = () => {
    const randomGames: Game[] = []
    while (randomGames.length < gamesToVoteOn) {
      const item = chosenGenre![Math.floor(Math.random() * chosenGenre!.length)]
      if (!randomGames.includes(item) && item.name !== undefined) {
        voteArray.push({ idx: chosenGenre.length, count: 0, name: item.name })
        randomGames.push(item)
      }
    }

    setRandomGames(randomGames)
  }

  const addVote = (gameNumber: number) => {
    const nextVoteArray = voteArray.map((obj, idx) => {
      if (gameNumber === idx) {
        return { idx: gameNumber, count: obj.count + 1, name: obj.name }
      } else {
        return obj
      }
    })
    setVoteArray(nextVoteArray)
  }

  const reset = () => {
    setRandomGames([])
    setGenresForVoting([])
    setChosenGenre([])
    setVoteArray([])
    setWinner(null)
  }

  const determineWinner = () => {
    const sortedVoteArray = [...voteArray].sort((a, b) => {
      return b.count - a.count
    })
    setWinner(sortedVoteArray[0])
  }

  return (
    <div className='home-container'>
      <div className='home-header'>THE MAGIC SELECTOR</div>
      <div>
        <div>No. of Games (Max 10)</div>
        <input
          type='text'
          pattern='[0-9]*'
          value={gamesToVoteOn}
          onChange={(e) => validateNumberInput(e)}
        />
      </div>
      {genresForVoting.length === 0 && (
        <button className='home-genre-select-button' onClick={() => getThreeRandomGenres()}>
          PICK THREE GENRES
        </button>
      )}
      <div className='home-item-container'>
        {genresForVoting.length > 0 &&
          genresForVoting.map((genre) => (
            <button key={genre.key} onClick={() => setChosenGenre(genre.data![genre.key])}>
              {genre.name}
            </button>
          ))}
      </div>
      {chosenGenre.length > 0 && (
        <div className='home-button-container'>
          <button onClick={() => getRandomGames()}>Generate Random Games</button>
        </div>
      )}

      <div>
        {randomGames.length > 0 &&
          randomGames.map((game, idx) => (
            <>
              <div key={game.name}>{game.name}</div>
              <button onClick={() => addVote(idx)}>VOTE</button>
              <div>VOTE COUNT: {voteArray[idx].count}</div>
            </>
          ))}
      </div>
      <div>
        {randomGames.length > 0 && !winner && (
          <button onClick={() => determineWinner()}>Determine Winner</button>
        )}
      </div>
      <div>{winner && <div>{winner.name}</div>}</div>
      <div>{winner && <button onClick={reset}>RESET</button>}</div>
    </div>
  )
}

export default Home
