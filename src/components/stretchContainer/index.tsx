import React, { useEffect, useState, useRef } from "react";
import { ALL_STRETCHES } from "../../data/ALL_STRETCHES";
import { StretchContainer } from "./StretchContainer.styled";
import { useParams } from "react-router-dom";
import { useAutoplay } from "../../hooks/AutoplayContext";
import PageLayout from "../ui/PageLayout";
import BackButton from "../ui/BackButton";
import Description from "./description";
import ExerciseCard from "./exerciseCard";
import ProgressionPanel from "./progressionPanel";
import StartButton from "../ui/startButton";
import ControlPanel from "./controlPanel";
import CompleteModal from "./completeModal";
import Timer from "./timer";
import useImagePreloader from "../../hooks/useImagePreloader";
import Loader from "../ui/loader";

export default function Stretch() {
  const { mode } = useParams();

  // Get default autoplay setting
  const [currentAutoplay, setCurrentAutoplay] = useState(
    (useAutoplay() as any).autoplay
  );

  // Get current mode's data or default to neck stretch
  const data = mode ? ALL_STRETCHES[mode] : ALL_STRETCHES.neck_stretch;

  const [currentExercise, setCurrentExercise] = useState<any>(null);
  const [status, setStatus] = useState("off"); // on,off,break,pause
  const [seconds, setSeconds] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const [progress, setProgress] = useState<any>({});

  // Preload images
  const imageURLs = data.exercises.reduce((acc : any, val : any) => {
    return [...acc, ...val.images]
  }, [])
  const { isPreloaded } = useImagePreloader(imageURLs);

  const timer = useRef<any>();

  // Start fresh
  useEffect(() => {
    clearProgress();
  }, []);

  useEffect(() => {
    if (data.exercises.indexOf(currentExercise) === data.exercises.length - 1) {
      setIsLast(true);
    }

    // When exercise ends
    if (seconds === 0 && status === "on") {
      // Tracking progress
      const index = data.exercises.indexOf(currentExercise);
      setProgress({ ...progress, [index]: true });

      // After each exercise
      if (isLast) {
        setIsComplete(true);
        setStatus("off");
        setCurrentExercise(null);
        handleTimer.stop();
      } else {
        if (!currentAutoplay) {
          handleTimer.pause();
          setCurrentExercise((prev: any) => {
            return data.exercises[data.exercises.indexOf(prev) + 1];
          });
          setSeconds(currentExercise.duration);
        } else {
          takeBreak();
        }
      }
    }

    // When break ends
    if (seconds === 0 && status === "break") {
      setStatus("on");
      setSeconds(currentExercise.duration);
      handleTimer.start();
    }
  }, [status, seconds, progress, currentExercise, data, isLast]);

  const controls = {
    start: function () {
      if (currentExercise) return;
      clearProgress();
      setIsLast(false);
      setIsComplete(false);
      setCurrentExercise(data.exercises[0]);

      if (currentAutoplay) {
        setStatus("break");
        setSeconds(data.breakDuration);
        handleTimer.start();
      } else {
        setStatus("on");
        setSeconds(data.exercises[0].duration);
        setIsPaused(true);
      }
    },
    pause: function () {
      handleTimer.pause();
    },
    resume: function () {
      if (!currentAutoplay) {
        setStatus("on");
      }
      setIsPaused(false);
      handleTimer.start();
    },
    skip: function () {
      if (isLast) return;
      if (status === "off") return;
      setIsPaused(false);
      clearInterval(timer.current);
      timer.current = 0;
      setCurrentExercise((prev: any) => {
        return data.exercises[data.exercises.indexOf(prev) + 1];
      });
      setStatus("break");
      if (currentAutoplay) {
        setSeconds(data.breakDuration);
        handleTimer.start();
      } else {
        setSeconds(currentExercise.duration);
        handleTimer.pause();
      }
    },
    stop: function () {
      setStatus("off");
      setCurrentExercise(null);
      handleTimer.stop();
      clearProgress();
    },
  };

  // Change to break & set next exercise
  function takeBreak() {
    setStatus("break");
    setCurrentExercise((prev: any) => {
      return data.exercises[data.exercises.indexOf(prev) + 1];
    });
    setSeconds(data.breakDuration);
    handleTimer.start();
  }

  function clearProgress() {
    setProgress(
      data.exercises.reduce((acc: any, val: any, index: any) => {
        return { ...acc, [index]: false };
      }, {})
    );
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
      if (status === "off") return;
      setIsPaused(true);
      clearInterval(timer.current);
      timer.current = 0;
    },
    stop: function () {
      setIsPaused(false);
      setIsLast(false);
      clearInterval(timer.current);
      timer.current = 0;
      setSeconds(null);
    },
  };

  return (
    <PageLayout>
      <StretchContainer>
        <BackButton />

        <Description data={data} status={status} />

        <ExerciseCard
          currentExercise={currentExercise}
          status={status}
          seconds={seconds}
          autoplay={currentAutoplay}
          speed={data.speed}
        />

        <ProgressionPanel
          progress={progress}
          currentAutoplay={currentAutoplay}
          setCurrentAutoplay={setCurrentAutoplay}
        />

        {status === "off" && !isPreloaded && <Loader />}

        {status === "off" && isPreloaded && <StartButton onClick={controls.start} />}
        {status !== "off" && (
          <Timer isPaused={isPaused} status={status} autoplay={currentAutoplay}>
            {seconds}
          </Timer>
        )}

        <ControlPanel
          controls={controls}
          currentAutoplay={currentAutoplay}
          status={status}
          isPaused={isPaused}
          isLast={isLast}
        />

        {isComplete && (
          <CompleteModal
            mode={mode}
            title={data.title}
            setIsComplete={setIsComplete}
            progress={progress}
          />
        )}
      </StretchContainer>
    </PageLayout>
  );
}
