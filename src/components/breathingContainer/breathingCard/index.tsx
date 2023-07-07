import {useState, useRef} from "react";
import ControlButton from "./ControlButton";
import BreathingCircle from "./breathingCircle/BreathingCircle";

export default function BreathingCard() {
  const [status, setStatus] = useState({ 
    on: false, 
    mode: "rest", 
    text: " " 
  });
  let breathingRef: any = useRef(null);

  function startBreathing() {
    setStatus({ on: true, mode: "in", text: "Slowly breathe in" });
  }

  function stopBreathing() {
    clearTimeout(breathingRef.current);
    breathingRef.current = null;
    setStatus({
      on: false,
      mode: "rest",
      text: " ",
    });
  }
  return (
    <>
      <BreathingCircle
        status={status}
        breathingRef={breathingRef}
        setStatus={setStatus}
      />

      <ControlButton
        status={status}
        startBreathing={startBreathing}
        stopBreathing={stopBreathing}
      />
    </>
  );
}
