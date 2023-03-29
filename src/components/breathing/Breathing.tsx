import React from "react";
import { BreathingExercise } from "../../styles/Breathing.styled";
import Background from "../ui/Background";
import BreathingCard from "./BreathingCard";
import BackButton from "../ui/BackButton";
import PageLayout from "../ui/PageLayout";

function Breathing(props: any) {
  return (
    <PageLayout>
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
    </PageLayout>
  );
}

export default Breathing;
