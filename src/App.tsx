import './App.css'
import Home from './Components/Home/Home'
import { genreData } from './Constants/genres'

function App() {
  return (
    <div className='App'>
      <Home genreData={genreData} />
    </div>
  )
}

export default App
