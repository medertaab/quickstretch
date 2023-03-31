import React, { useState, createContext, useContext, useEffect } from 'react'

const Context = createContext(undefined)

export function useTheme() {
  return useContext(Context)
}

export function ThemeProvider({ children } : any) {
  const [theme, setTheme] = useState("light");

  // Set cached theme upon loading
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const cachedTheme = localStorage.getItem("theme") as any
      setTheme(cachedTheme)
    }
  }, [])

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