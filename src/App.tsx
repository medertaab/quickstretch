import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Stretch from "./components/Stretch";

function App() {
  const [mode, setMode] = useState("");
  // NECK_STRETCH/HAND_STRETCH/SHOULDER_STRETCH/BREATHING

  useEffect(() => {
    setMode("");
  }, []);

  return (
    <div className="App">
      <main>
        {!mode && <Homepage setMode={setMode} />}
        {mode && <Stretch mode={mode} setMode={setMode} />}
      </main>
    </div>
  );
}

export default App;
