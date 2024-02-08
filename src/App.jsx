import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Intro from './Component/Intro';
import Skills from './Component/Skills';
import Works from './Component/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
      <Works/>
      
      
    </div>
  );
}

export default App;
