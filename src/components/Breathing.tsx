import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ArrowLeft from "../assets/arrow-left-solid.svg";
import { BreathingExercise, BreathingCircle } from "./styles/BreathingStyled";

function Breathing(props: any) {
  // Handle links
  window.history.pushState({}, "", `/breathing`);

  const [status, setStatus] = useState({
    on: false,
    mode: "rest",
    text: " ",
  });
  let breathingRef: any = useRef(null);

  function startBreathing() {
    setStatus({ on: true, mode: "in", text: "Slowly breathe in" });
  }

  function stopBreathing() {
    clearTimeout(breathingRef.current)
    breathingRef.current = null
    setStatus({
      on: false,
      mode: "rest",
      text: " ",
    });
  }

  useEffect(() => {
    if (!status.on) return

    if (status.mode === "hold") {
      breathingRef.current = setTimeout(() => {
        setStatus({ on: true, mode: "out", text: "Slowly breathe out" });
      }, 5000);
    }

    if (status.mode === "out") {
      breathingRef.current = setTimeout(() => {
        setStatus({ on: true, mode: "rest", text: "Slowly breathe out" });
      }, 4000);
    }

    if (status.mode === "rest") {
      breathingRef.current = setTimeout(() => {
        setStatus({ on: true, mode: "in", text: "Slowly breathe in" });
      }, 3000);
    }

    if (status.mode === "in") {
      breathingRef.current = setTimeout(() => {
        setStatus({ on: true, mode: "hold", text: "Hold your breath" });
      }, 4000);
    }
  }, [status, breathingRef]);

  return (
    <BreathingExercise>
      <a className="button-back" href="/">
        <img src={ArrowLeft}></img>
      </a>

      <h2>Breathing page</h2>
      <p className="exercise-details">
        Our breath is a powerful tool to ease stress and reduce anxiety. A
        simple breathing exercise can make a big difference if you make them
        part of your regular routine.
      </p>

      <BreathingCircle>
        <div className={`topCircle ${status.mode}`}></div>
        <div className="bottomCircle"></div>
      </BreathingCircle>

      {!status.on && (
        <>
          <p>Press start to begin</p>
          <button className="control-button" type="button" onClick={startBreathing}>
            Start
          </button>
        </>
      )}
      
      {status.on && (
        <>
          <p className="fade-in">{status.text}</p>
          <button className="control-button" type="button" onClick={stopBreathing}>
          Stop
        </button>
        </>
      )}
    </BreathingExercise>
  );
}

export default Breathing;
