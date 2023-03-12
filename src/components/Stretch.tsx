import React, { useEffect, useState, useRef } from "react";
import { ALL_STRETCHES } from "../data/ALL_STRETCHES";
import styled from "styled-components";
import CompleteCard from "./CompleteCard";
import Breathing from "./Breathing";

const Timer = styled.div`
  padding: 1rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`;

const ControlButtons = styled.div`
  padding: 1rem;
  border: 1px solid white;
  width: fit-content;
  margin: 0 auto;
`;

export default function Stretch(props: any) {
  const { mode, setMode } = props;
  if (mode === "BREATHING") return <Breathing {...props} />;
  const data = ALL_STRETCHES[mode];

  const [currentExercise, setCurrentExercise] = useState<any>(null);

  const timer = useRef<number>();
  const [seconds, setSeconds] = useState<number | null>(null);
  const [status, setStatus] = useState("off"); // on,off,break,pause
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  function isLastExercise() {
    return (
      data.exercises.indexOf(currentExercise) === data.exercises.length - 1
    );
  }

  useEffect(() => {
    // When exercise ends
    if (seconds === 0 && status === "on") {
      if (isLastExercise()) {
        setIsComplete(true);
        handleStop();
      } else {
        takeBreak();
      }
    }

    // When break ends
    if (seconds === 0 && status === "break") {
      setStatus("on");
      setSeconds(currentExercise.duration);
      handleTimer.start();
    }
  }, [status, seconds]);

  // Start button
  function handleStart() {
    if (currentExercise) return;
    setIsComplete(false);
    setStatus("on");
    setCurrentExercise(data.exercises[0]);
    setSeconds(data.exercises[0].duration);
    handleTimer.start();
  }

  // Pause button
  function handlePause() {
    handleTimer.pause();
  }

  // Resume button
  function handleResume() {
    setIsPaused(false);
    handleTimer.start();
  }

  // Skip button
  function handleSkip() {
    if (isLastExercise()) return;
    clearInterval(timer.current);
    timer.current = 0;
    setCurrentExercise((prev: any) => {
      return data.exercises[data.exercises.indexOf(prev) + 1];
    });
    setSeconds(data.breakDuration);
    setStatus("break");
    handleTimer.start();
  }

  // Stop button
  function handleStop() {
    setStatus("off");
    setCurrentExercise(null);
    handleTimer.stop();
  }

  // Change to break & set next exercise
  function takeBreak() {
    setStatus("break");
    setCurrentExercise((prev: any) => {
      return data.exercises[data.exercises.indexOf(prev) + 1];
    });
    setSeconds(data.breakDuration);
    handleTimer.start();
  }

  // Timer controller
  const handleTimer = {
    start: function () {
      if (!timer.current) {
        // Prevent stacking intervals
        timer.current = setInterval(() => {
          setSeconds((prev: any) => prev - 1);
        }, 1000);
      }
    },
    pause: function () {
      setIsPaused(true);
      clearInterval(timer.current);
      timer.current = 0;
    },
    stop: function () {
      clearInterval(timer.current);
      timer.current = 0;
      setSeconds(0);
    },
  };

  return (
    <>
      <button type="button" onClick={() => setMode("")}>
        Go back
      </button>
      <h2>{data.title}</h2>
      <p>{data.details}</p>

      <p>{status}</p>

      <Timer>{seconds}</Timer>

      <h3>{currentExercise && currentExercise.title}</h3>
      <p>{currentExercise && currentExercise.details}</p>
      <h4>{status === "break" && "Get ready"}</h4>
      <h4>{isPaused && "Paused"}</h4>

      {status === "off" && <button onClick={handleStart}>Start</button>}

      <ControlButtons>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleSkip}>Skip</button>
      </ControlButtons>

      {isComplete && <CompleteCard />}
    </>
  );
}
