import BreathingCard from "./breathingCard";
import BackButton from "../ui/BackButton";
import PageLayout from "../ui/PageLayout";
import { BreathingContainerStyled } from "./BreathingContainer.styled";

export default function BreathingContainer() {
  return (
    <PageLayout>
      <BreathingContainerStyled>
        <BackButton />

        <h2>Breathing page</h2>
        <p className="exercise-details">
          Our breath is a powerful tool to ease stress and reduce anxiety. A
          simple breathing exercise can make a big difference if you make them
          part of your regular routine.
        </p>

        <BreathingCard />
      </BreathingContainerStyled>
    </PageLayout>
  );
}