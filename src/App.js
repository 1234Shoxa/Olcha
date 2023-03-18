import logo from './logo.svg';
import './App.css';
import TopNav from './Components/Header/TopNav';
import Navbar from './Components/Navbar/Navbar';
import Carusel from './Components/Carusel/Carusel'
import Carusel2 from "./Components/Carusel/Carusel2"
import Carusel3 from './Components/Carusel/Carusel3';
import Index from "./Components/Card/index"
import Indeks from './Components/Cards/Indeks';
import Brend from './Components/Brend/Brend';
function App() {
  return (
    <div className="app">
      <TopNav/>
      <Navbar/>
      <Carusel/>
      <Carusel2/>
      <Carusel3/>
      <Index/>
      <Indeks/>
      <Brend/>
    </div>
  );
}

export default App;
