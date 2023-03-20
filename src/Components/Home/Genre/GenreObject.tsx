/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { Game, Genre } from '../../../Interfaces/GameInterface'

interface Props {
  genre: Genre
  idx: number
  selectGenre: (genreList: Game[]) => void
}

const GenreObject: React.FC<Props> = ({ genre, idx, selectGenre }) => {
  return (
    <div className='home-genre-pick'>
      <button
        className='home-genre-pick-button'
        key={genre.key}
        onClick={() => selectGenre(genre.data![genre.key])}
      >
        {genre.name}
      </button>
      <div>!vote{`${idx + 1}`}</div>
    </div>
  )
}

export default GenreObject
