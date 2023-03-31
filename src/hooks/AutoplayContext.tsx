import React, { useState, createContext, useContext } from 'react'

const Context = createContext(undefined)

export function useAutoplay() {
  const autoplayContext = useContext(Context)
  return autoplayContext
}

export function AutoplayProvider({ children } : any) {
  const [autoplay, setAutoplay] = useState(true);

  function toggleAutoplay() {
    if (autoplay) {
      setAutoplay(false)
      localStorage.setItem("autoplay", "false")
    } else {
      setAutoplay(true)
      localStorage.setItem("autoplay", "true")
    }
  }
  
  const value = { autoplay, setAutoplay, toggleAutoplay } as any

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}