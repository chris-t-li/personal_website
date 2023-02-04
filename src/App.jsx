import { useState } from 'react';
import NavBar from './components/NavBar';
import Intro from "./components/Intro";
import About from './components/About';
import Books from './components/Books';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <TechStack />
      <Projects />
      <Books />

    </div>
  )
}

export default App
