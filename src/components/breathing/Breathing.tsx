import React from "react";
import { BreathingExercise } from "../../styles/Breathing.styled";
import Background from "../ui/Background";
import BreathingCard from "./BreathingCard";
import BackButton from "../ui/BackButton";

function Breathing(props: any) {
  // Handle links
  window.history.pushState({}, "", `/breathing`);

  return (
    <BreathingExercise>
      <BackButton />

      <h2>Breathing page</h2>
      <p className="exercise-details">
        Our breath is a powerful tool to ease stress and reduce anxiety. A
        simple breathing exercise can make a big difference if you make them
        part of your regular routine.
      </p>

      <BreathingCard />
      <Background />
    </BreathingExercise>
  );
}

export default Breathing;
