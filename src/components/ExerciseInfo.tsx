import React from "react";
import Sprite from "./Sprite";
import styled from "styled-components";

export default function ExerciseInfo(props: any) {
  const { data, currentExercise, status } = props;
  const numberOfExercises = data.exercises.length;
  return (
    <div>
      <h3>
        {data.exercises.indexOf(currentExercise) + 1}/{numberOfExercises}:{" "}
        {currentExercise.title}
      </h3>
      <h4>{status === "break" && "Get ready"}</h4>
      <ol>
        {currentExercise.details.split("//").map((direction: string) => {
          return <li>{direction}</li>;
        })}
      </ol>
    </div>
  );
}
