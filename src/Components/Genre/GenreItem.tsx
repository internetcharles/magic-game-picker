import React from 'react'
import './Styles/GenreItem.scss'

interface Props {
  name: string | undefined
  idx: number | undefined
  handleButtonPress: () => void
}

const GenreItem: React.FC<Props> = ({ name, idx, handleButtonPress }) => {
  return (
    <div onClick={handleButtonPress} className='genre-item-container'>
      <div className='genre-item-name'>{name}</div>
      <div className='genre-item-vote-header'>!vote{idx}</div>
    </div>
  )
}

export default GenreItem
