import useStore from "./store";
import { Home } from './pages'
import { Navbar } from "./components";
import './App.scss'

function App() {
  const isDark = useStore(state => state.isDark)

  return (
    <div className={isDark ? 'app dark' : 'app'}>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
