import React, { useEffect } from "react";
import Sprite from "./Sprite";
import ExerciseContainer from "../../styles/ExerciseContainer.styled";

export default function ExerciseCard(props: any) {
  const { currentExercise, status, seconds, autoplay, speed } = props;

  if (!currentExercise)
    return (
      <ExerciseContainer status={status}>
        <Sprite data={currentExercise} />
      </ExerciseContainer>
    );

  return (
    <ExerciseContainer status={status}>
      <Sprite data={currentExercise} speed={speed}/>
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
          {currentExercise.instructions.map((instruction: string, id : number) => {
            return <li key={id}>{instruction}</li>
          })}
        </ul>
      </div>
    </ExerciseContainer>
  );
}


