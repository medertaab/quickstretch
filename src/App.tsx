import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Stretch from "./components/Stretch";

function App() {
  const [mode, setMode] = useState("");

  //Handle links
  useEffect(() => {
    if (window.location.pathname) {
      setMode(window.location.pathname.toUpperCase().substring(1))
    } else {
      setMode("");
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        {!mode && <Homepage setMode={setMode} />}
        {mode && <Stretch mode={mode} setMode={setMode} />}
      </main>
    </div>
  );
}

export default App;
