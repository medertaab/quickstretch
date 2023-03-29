import React, { useState, createContext, useContext } from 'react'

const Context = createContext(undefined)

export function useTheme() {
  const themeContext = useContext(Context)
  return themeContext
}

export function ThemeProvider({ children } : any) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark")
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light")
    }
  }
  
  const value = { theme, toggleTheme, setTheme } as any

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}