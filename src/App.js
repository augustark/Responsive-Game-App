import useStore from "./store";
import { GameDetails, Home } from './pages'
import { Navbar } from "./components";
import './App.scss'

function App() {
  const isDark = useStore(state => state.isDark)

  return (
    <div className={isDark ? 'app dark' : 'app'}>
      <Navbar/>
      {/* <Home/> */}
      <GameDetails/>
    </div>
  );
}

export default App;
