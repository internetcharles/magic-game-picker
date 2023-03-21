import './App.css'
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom'
// import Home from './Components/Home/Home'
import Start from './Components/Start/Start'
import SystemSelect from './Components/Select/SystemSelect'
import GenreScreen from './Components/Genre/GenreScreen'
import GameSelect from './Components/GameSelect/GameSelect'

function BasicLayout(): JSX.Element {
  return (
    <div className='desktop'>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<BasicLayout />}>
            <Route index path='/' element={<Start />} />
            <Route path='/system-select' element={<SystemSelect />} />
            <Route path='/genre-screen' element={<GenreScreen />} />
            <Route path='/game-screen' element={<GameSelect />} />
            {/* <Route path='/home' element={<Home />} /> */}
          </Route>
        </Routes>
      </MemoryRouter>
    </div>
  )
}

export default App
