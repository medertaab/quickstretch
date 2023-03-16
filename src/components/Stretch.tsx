import React, { useEffect, useState, useRef } from "react";
import { ALL_STRETCHES } from "../assets/ALL_STRETCHES";
import CompleteCard from "./CompleteCard";
import Breathing from "./Breathing";
import Sprite from "./Sprite";
import ArrowLeft from "../assets/arrow-left-solid.svg";
import {
  StretchPage,
  Timer,
  StartButton,
  ControlButton,
  ExerciseContainer
} from "./Stretch.styled";
import ExerciseInfo from "./ExerciseInfo";

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
  const [isLast, setIsLast] = useState(false);
  const duration = data.exercises.reduce((acc, val) => {
    return acc = acc + val.duration + 5
  }, 0)

  useEffect(() => {
    // When exercise ends
    if (seconds === 0 && status === "on") {
      if (isLast) {
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

  useEffect(() => {
    if (data.exercises.indexOf(currentExercise) === data.exercises.length - 1) {
      setIsLast(true);
    }
  }, [data, currentExercise]);

  // Start button
  function handleStart() {
    if (currentExercise) return;
    setIsLast(false);
    setIsComplete(false);
    setStatus("break");
    setCurrentExercise(data.exercises[0]);
    setSeconds(data.breakDuration);
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
    if (isLast) return;
    if (status === "off") return;
    setIsPaused(false)
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
      if (status === "off") return
      setIsPaused(true);
      clearInterval(timer.current);
      timer.current = 0;
    },
    stop: function () {
      setIsPaused(false);
      setIsLast(false)
      clearInterval(timer.current);
      timer.current = 0;
      setSeconds(null);
    },
  };

  return (
    <StretchPage>
      <a className="button-back" href="/">
        <img src={ArrowLeft}></img>
      </a>

      <h2>{data.title}</h2>
      <p className="stretch-details">{data.details}</p>
      <p>Duration: {Math.round((duration/60)*2)/2} min</p>

      <ExerciseContainer>
        <Sprite data={currentExercise}/>
        {currentExercise && <ExerciseInfo data={data} currentExercise={currentExercise} status={status}/>}
      </ExerciseContainer>

      {status === "off" && <StartButton onClick={handleStart} />}
      {status !== "off" && (
        <Timer isPaused={isPaused} status={status}>
          {seconds}
        </Timer>
      )}

      <div className="controlButtons">
        {isPaused && <ControlButton title="Resume" onClick={handleResume}/>}
        {!isPaused && <ControlButton title="Pause" onClick={handlePause} status={status}/>}
        <ControlButton title="Stop" onClick={handleStop} status={status}/>
        <ControlButton title="Skip" onClick={handleSkip} isLast={isLast} status={status}/>
      </div>

      <div className="exercise-text">
        <h4>{isPaused && "Paused"}</h4>
      </div>

      {isComplete && <CompleteCard title={data.title} setIsComplete={setIsComplete}/>}
    </StretchPage>
  );
}
