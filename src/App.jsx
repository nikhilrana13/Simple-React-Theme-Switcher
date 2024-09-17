import React, { useContext, useEffect } from 'react'
import { Themecontext } from './ThemeContext'
import './App.css'



const App = () => {
  const {theme,toggleTheme} = useContext(Themecontext)


  useEffect(()=>{
    document.body.className = theme
  },[theme])


  return (
   <>
    <div className='app'>
  <input
    type="checkbox"
    name="switcher"
    id="switcher-input"
    className="switcher-input" />
  <label className="switcher-label" htmlFor="switcher-input" onClick={toggleTheme}>
    <i className="fas fa-solid fa-moon" />
    <span className="switcher-toggler" />
    <i className="fas fa-solid fa-sun" />
  </label>
   
      </div>
      </>
  )
}

export default App