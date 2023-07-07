import React from "react";
import { DescriptionStyled } from "./Description.styled";
import { Exercise } from "../../../data/ALL_STRETCHES";

interface DescriptionProps {
  data: Stretch,
  status: string
}

interface Stretch {
  title: string;
  speed: number; // in ms
  details: string;
  breakDuration: number;
  exercises: Exercise[];
}

export default function Description({ data, status } : DescriptionProps) {
  const duration = data.exercises.reduce((acc: any, val: any) => {
    return (acc = acc + val.duration + 5);
  }, 0);
  return (
    <DescriptionStyled status={status}>
      <h2>{data.title}</h2>
      <p>
        {data.details}. Duration: {Math.round((duration / 60) * 2) / 2}min
      </p>
    </DescriptionStyled>
  );
}
