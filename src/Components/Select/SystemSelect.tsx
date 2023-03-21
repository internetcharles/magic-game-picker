import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { consoles } from '../../Constants/consoles'
import { staticGameData } from '../../Constants/genres'
import { useAppDispatch } from '../../Redux/hooks'
import { setGameData } from '../../Redux/Reducers/gameDataSlice'
import MiniButton from '../Home/Global/MiniButton'
import Window from '../Home/Global/Window'
import './Styles/SystemSelect.scss'

const SystemSelect: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [selectedSystem, setSelectedSystem] = useState('')

  const handleSystemSubmitPress = () => {
    if (selectedSystem !== '') {
      dispatch(setGameData({ consoleData: staticGameData[selectedSystem] }))
      navigate('/genre-screen')
    }
  }

  return (
    <Window size='small-window' label='Select Console'>
      <div className='console-select-container'>
        <div className='console-select-header-options-container'>
          <div className='console-select-header'>Consoles:</div>

          <div className='console-select-options-container'>
            <div className='console-select-section-container'>
              {consoles.map((console) => (
                <div className='console-select-input-item' key={console.name}>
                  <input
                    key={console.name}
                    className='console-select-item'
                    type='radio'
                    value={console.key}
                    name='console'
                    onChange={(e) => setSelectedSystem(e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div>
              {consoles.map((console) => (
                <div className='console-select-label-item' key={console.name}>
                  {console.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='console-select-submit-button-container'>
            <MiniButton label='OK' icon='' handleButtonPress={() => handleSystemSubmitPress()} />
          </div>
          <div className='console-select-coming-soon'>More consoles coming soon!</div>
        </div>
      </div>
    </Window>
  )
}

export default SystemSelect
