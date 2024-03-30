import { useState } from 'react';
import './App.css'
import "./components/toggle.css";
import { Footer,Header, MainContent } from './components'
import { createContext } from 'react';
import moon from './assets/moon.png';
import sun from './assets/sun.png';


export const ThemeContext = createContext(null)
    
function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={ {theme, setTheme} }>

    <div className='App' id={theme}>
      
      <input type="checkbox" id='toggle' className='toogle' onChange={toggleTheme} checked={theme === "dark"} />
      <label className='label' htmlFor="toggle">
      <img src={moon} id='moon'/>
      <img src={sun} id='sun'/>
      </label>

    <Header />
    <MainContent />
    <Footer />
    </div>

    </ThemeContext.Provider>
  )
}

export default App
