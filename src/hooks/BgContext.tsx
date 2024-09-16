import React, { useState, createContext, useContext, useEffect } from "react";

const Context = createContext(undefined);

export function useBg() {
  return useContext(Context);
}

export function BgProvider({ children }: any) {
  const [isHomepage, setIsHomepage] = useState(true);

  const value = {isHomepage, setIsHomepage} as any;

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}
