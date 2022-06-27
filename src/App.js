import useStore from "./store";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query'
import { Loading, Navbar, NewsPreview, Preview } from "./components";
import { GameDetails, GameDirectory, Home, News, Page404, Search } from './pages'
import './App.scss' 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})


function App() {
  const isDark = useStore(state => state.isDark)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className={isDark ? 'app dark' : 'app'}>
          <Navbar/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/news' element={<News/>}>
              <Route index element={<NewsPreview/>}/>
              <Route path='upcoming-games' element={<Preview/>}/>
            </Route>
            <Route path="/games" element={<GameDirectory/>}>
              <Route index element={<Preview/>}/>
              <Route path='coming' element={<Preview/>}/>
              <Route path='recent' element={<Preview/>}/>
            </Route>
            <Route path='/games/:gameid' element={<GameDetails/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='*' element={<Page404/>}/>
          </Routes>
        </main>
      </QueryClientProvider>
    </>
  );
}

export default App;
