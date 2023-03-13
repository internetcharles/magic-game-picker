import './App.css'
import Home from './Components/Home/Home'
import Adventure from './Data/ps2/Adventure.json'
import Arcade from './Data/ps2/Arcade.json'
import CardBoardGame from './Data/ps2/CardBoardGame.json'
import Fighting from './Data/ps2/Fighting.json'
import HackAndSlashBeatEmUp from './Data/ps2/HackAndSlashBeatEmUp.json'
import Music from './Data/ps2/Music.json'
import NoGenre from './Data/ps2/NoGenre.json'
import Pinball from './Data/ps2/Pinball.json'
import Platform from './Data/ps2/Platform.json'
import PointAndClick from './Data/ps2/PointAndClick.json'
import Puzzle from './Data/ps2/Puzzle.json'
import QuizTrivia from './Data/ps2/QuizTrivia.json'
import Racing from './Data/ps2/Racing.json'
import RealTimeStrategy from './Data/ps2/RealTimeStrategy.json'
import RolePlaying from './Data/ps2/RolePlaying.json'
import Shooter from './Data/ps2/Shooter.json'
import Simulator from './Data/ps2/Simulator.json'
import Sport from './Data/ps2/Sport.json'
import Strategy from './Data/ps2/Strategy.json'
import Tactical from './Data/ps2/Tactical.json'
import TurnBasedStrategy from './Data/ps2/TurnBasedStrategy.json'
import VisualNovel from './Data/ps2/VisualNovel.json'

function App() {
  const data = {
    Adventure: Adventure,
    Arcade: Arcade,
    'Board Game': CardBoardGame,
    Fighting: Fighting,
    'Hack and Slash/Beat em up': HackAndSlashBeatEmUp,
    Music: Music,
    'No Genre': NoGenre,
    Pinball: Pinball,
    Platform: Platform,
    'Point and Click': PointAndClick,
    Puzzle: Puzzle,
    'Quiz/Trivia': QuizTrivia,
    Racing: Racing,
    'Real Time Strategy': RealTimeStrategy,
    RPG: RolePlaying,
    Shooter: Shooter,
    Simulator: Simulator,
    Sport: Sport,
    Strategy: Strategy,
    Tactical: Tactical,
    'Turn Based Strategy': TurnBasedStrategy,
    'Visual Novel': VisualNovel,
  }

  return (
    <div className='App'>
      <Home data={data} />
    </div>
  )
}

export default App
