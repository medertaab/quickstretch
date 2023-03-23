import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ArrowLeft from "../assets/arrow-left-solid.svg";

const BreathingExercise = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: #ffffff5a;
  border-radius: 1rem;
  cursor: default;

  .button-back {
    left: 0;
    margin-left: 1rem;
    position: absolute;

    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  .exercise-details {
    max-width: 80%;
    margin-top: 0.1rem;
    font-size: 0.7rem;
    opacity: 80%;
    font-style: italic;
  }

  .breathingCircle {
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    margin: 0 auto;
  }

  .topCircle {
    height: 0%;
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    animation: circle 10s infinite ease-in-out;
    transition: background-color 0.1s linear;
  }

  .topCircle.in {
    height: 79%;
    background-color: rgba(21, 219, 219, 0.765);
    transition: height 4s, background-color 4s linear;
  }

  .topCircle.hold {
    height: 79%;
    background-color: rgba(21, 219, 219, 0.765);
  }

  .topCircle.out {
    height: 20%;
    background-color: white;
    transition: height 5s, background-color 5s linear;
  }

  .topCircle.rest {
    background-color: white;
    height: 20%;
  }

  .bottomCircle {
    position: absolute;
    aspect-ratio: 1;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.368);
    border-radius: 50%;
    z-index: -0.5;
    border: 3px solid rgba(21, 219, 219, 0.765);
  }

  .startButton {
    flex: 1;
    height: 40px;
    margin: 30px 10px;
    background-color: white;
    border: 1px solid rgba(21, 219, 219, 0.765);
    border-radius: 15px;
    width: 100px;
  }

  .startButton:active {
    transform: translateY(2px);
    background-color: rgb(229, 229, 229);
  }

  .startButton:hover {
    background-color: rgba(255, 255, 255, 0.74);
  }

  .control-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .control-buttons > * {
    height: 2rem;
    width: 5rem;
    min-width: fit-content;
    border: 2px solid var(--accent);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.1s ease-in-out;
    background-color: ${(props) => props.title === "Resume" && "var(--accent)"};
    cursor: pointer;

    &:hover {
      background-color: ${(props) =>
        props.title === "Resume"
          ? "var(--accent-transparent)"
          : "var(--accent)"};
    }

    svg {
      height: 55%;
      fill: var(--default-black);
    }
  }
`;

function Breathing(props: any) {
  // Handle links
  useEffect(() => {
    window.history.pushState({}, "", `/breathing`)
  }, [])

  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingStatus, setBreathingStatus] = useState("rest");
  const [breathingText, setBreathingText] = useState(" ");

  function startBreathing() {
    setIsBreathing(true);
    setTimeout(() => setBreathingStatus("in"), 1000);
  }

  function stopBreathing() {
    setIsBreathing(false);
    setBreathingStatus("rest");
    setBreathingText(" ")
    breathingRef.current = null
  }

  console.log("hi")

  let breathingRef : any = useRef()

  useEffect(() => {
    if (!isBreathing) return;
    if (breathingStatus === "rest") {
      setBreathingText("Take a deep breath in")
      breathingRef.current = setTimeout(() => setBreathingStatus("in"), 2500);
    } else if (breathingStatus === "in") {
      setBreathingText("Hold your breath")
      breathingRef.current = setTimeout(() => setBreathingStatus("hold"), 4000);
      
    } else if (breathingStatus === "hold") {
      breathingRef.current = setTimeout(() => setBreathingStatus("out"), 5000);
      setBreathingText("Slowly breathe out") 
    } else if (breathingStatus === "out") {
      breathingRef.current = setTimeout(() => setBreathingStatus("rest"), 5000);
    }
  }, [breathingStatus, isBreathing]);

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

      {breathingStatus}

      <div className="breathingCircle">
        <div className={`topCircle ${breathingStatus}`}></div>
        <div className="bottomCircle"></div>
      </div>

      <div className={`breathingText`}>
        {isBreathing ? (
          <p>{breathingText}</p>
        ) : (
          <p>Press start to begin</p>
        )}
      </div>

      <div className="control-buttons">
        <button type="button" onClick={startBreathing}>
          Start
        </button>
        <button type="button" onClick={stopBreathing}>
          Stop
        </button>
      </div>
    </BreathingExercise>
  );
}

export default Breathing;
