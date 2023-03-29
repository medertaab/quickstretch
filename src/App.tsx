import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/Navbar";
import Stretch from "./components/stretches/Stretch";
import GlobalStyles from "./styles/GlobalStyles";
import DarkGlobalStyles from "./styles/DarkGlobalStyles";
import Background from "./components/ui/Background";
import { useTheme } from "./hooks/ThemeContext";


function App() {
  const {theme, toggleTheme, setTheme} = useTheme() as any
  const [mode, setMode] = useState("");
  
  // Set theme
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light")
  } else {
    const cachedTheme = localStorage.getItem("theme")
    setTheme(cachedTheme)
  }

  // Set autoplay
  if (!localStorage.getItem("autoplay")) {
    localStorage.setItem("autoplay", "true")
  }

  //Handle links
  useEffect(() => {
    if (window.location.pathname) {
      setMode(window.location.pathname.toUpperCase().substring(1));
    } else {
      setMode("");
    }
  }, []);

  return (
      <div className="App">
        {theme === "light" ? <GlobalStyles /> : <DarkGlobalStyles />}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          {!mode && <Homepage setMode={setMode} />}
          {mode && <Stretch mode={mode} setMode={setMode} />}
        </main>
        <Background />
      </div>
  );
}

export default App;
