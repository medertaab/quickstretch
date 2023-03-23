import React from "react";
import styled from "styled-components";
import Sprite from "./Sprite";

export default function ExerciseCard(props: any) {
  const { data, currentExercise, status, seconds, autoplay } = props;

  if (!currentExercise)
    return (
      <ExerciseContainer status={status}>
        <Sprite data={currentExercise} />
      </ExerciseContainer>
    );

  return (
    <ExerciseContainer status={status}>
      <Sprite data={currentExercise} />
      <div className="exercise-info">
        {autoplay && (
          <div className="status">
            <h4>{status === "break" && "Get ready!"}</h4>
            <h4>{seconds === currentExercise.duration && "Go!"}</h4>
          </div>
        )}

        {!autoplay && (
          <div className="status">
            <h4>{seconds === currentExercise.duration && "Next exercise:"}</h4>
          </div>
        )}

        <h3 className="title">
          {currentExercise.title}
        </h3>

        <ul>
          {currentExercise.instructions.map((instruction: string) => {
            return <li>{instruction}</li>
          })}
        </ul>
      </div>
    </ExerciseContainer>
  );
}

const ExerciseContainer = styled.div<{status : String}>`
  display: flex;
  align-items: center;
  max-width: 30rem;
  width: 100%;
  min-height: 250px;
  background-color: var(--accent-transparent);
  border-radius: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  margin-top: 1rem;
  position: relative;

  .status {
    height: 1rem;
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    animation: ${props => props.status === "break" ? "glow 1s ease-in-out infinite" : "none"}

  }

  ul {
    padding: 0;
  }

  li {
    text-align: left;
    font-size: 0.7rem;
    margin-top: 0.7rem;
    list-style: none;
    animation: ${props => props.status === "break" ? "text-shimmer 1s ease-in-out infinite" : "none"}
  }

  .exercise-info {
  }

  @keyframes glow {
    0% {
      color: var(--default-black);
    } 50% {
      color: green;
    } 100% {
      color: var(--default-black);
    }
  }

  @keyframes text-shimmer {
    0% {
      opacity: 100%;
    } 50% {
      opacity: 50%;
    } 100% {
      opacity: 100%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
