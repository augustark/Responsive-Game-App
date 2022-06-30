import { useDarkModeStore } from "./store";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query'
import { Navbar, NewsPreview, Preview } from "./components";
import { GameDetails, GameDirectory, Home, News, Page404, Search } from './pages'

const twentyFourHoursInMs = 1000 * 60 * 60 * 24

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  }
})


function App() {
  const isDark = useDarkModeStore(state => state.isDark)
  const isOverlay = useDarkModeStore(state => state.isOverlay)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className={`app ${isDark ? 'dark' : ''} ${isOverlay ? 'overlay' : ''}`}>
          <Navbar/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/news' element={<News/>}>
              <Route index element={<NewsPreview/>}/>
              <Route path='upcoming-games' element={<Preview title={'Coming this week'}/>}/>
            </Route>
            <Route path="/games" element={<GameDirectory/>}>
              <Route index element={<Preview/>}/>
              <Route path='coming' element={<Preview/>}/>
              <Route path='recent' element={<Preview/>}/>
              <Route path='popular' element={<Preview/>}/>
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
