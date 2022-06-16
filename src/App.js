import Navbar from "./components/navbar/navbar";
import useStore from "./store";
import './App.scss'

function App() {
  const isDark = useStore(state => state.isDark)

  return (
    <div className={isDark ? 'app dark' : 'app'}>
      <Navbar/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
