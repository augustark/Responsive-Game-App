import useStore from "./store";
import { GameDetails, Home, News } from './pages'
import { Navbar, NewsPreview, Preview } from "./components";
import './App.scss'
import { Route, Routes } from "react-router-dom";

function App() {
  const isDark = useStore(state => state.isDark)

  return (
    <div className={isDark ? 'app dark' : 'app'}>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/news' element={<News/>}>
          <Route index element={<NewsPreview/>}/>
          <Route path='upcoming-games' element={<Preview/>}/>
        </Route>
        <Route path='/games/:gameid' element={<GameDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
