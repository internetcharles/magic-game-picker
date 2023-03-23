import React from 'react'
import MiniButton from '../Home/Global/MiniButton'
import './Styles/GenreItem.scss'

interface Props {
  name: string | undefined
  idx: number | undefined
  handleButtonPress: () => void
}

const GenreItem: React.FC<Props> = ({ name, idx, handleButtonPress }) => {
  return (
    <div className='genre-item-container'>
      <div className='genre-item-name'>{name}</div>
      <MiniButton label='SELECT' icon='' handleButtonPress={handleButtonPress} />
    </div>
  )
}

export default GenreItem
