import Navbar from "./components/navbar/navbar";
import useStore from "./store";
import './App.scss'
import Carousel from "./components/carousel/carousel";

function App() {
  const isDark = useStore(state => state.isDark)

  return (
    <div className={isDark ? 'app dark' : 'app'}>
      <Navbar/>
      <Carousel/>
    </div>
  );
}

export default App;
