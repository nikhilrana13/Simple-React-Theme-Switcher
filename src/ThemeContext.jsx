
import React, { createContext, useState } from 'react'
const Themecontext = createContext()

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light')

    const toggleTheme = () =>{
        setTheme((prevtheme)=> (prevtheme === 'light' ? 'dark': 'light'))
       }
    
  return (
    <Themecontext.Provider value={{theme,toggleTheme}}>
      {children}
    </Themecontext.Provider>
  )
}

export default ThemeProvider
export{Themecontext}