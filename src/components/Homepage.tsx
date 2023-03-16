import React from "react";
import styled from "styled-components";
import Background from "./Background";
import StretchCard from "./StretchCard";

const HomePageStyled = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin: 0;
  }

  .description {
    margin: 0;
    font-size: 0.9rem;
    opacity: 70%;
  }

  .prompt {
    margin: 1rem auto 0 auto;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .mode-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    gap: 1rem;
    max-width: max-content;
    justify-content: center;
  }
`;

export default function Homepage(props: any) {
  const { setMode } = props;
  return (
    <HomePageStyled className="fade-in">
      <h1 className="logo">🐰 QuickStretch</h1>
      <p className="description">Easy way to relieve muscle tension and improve your wellbeing</p>

      <p className="prompt">Pick an exercise to start:</p>

      <ul className="mode-list">
        <StretchCard title="Neck stretch" setMode={setMode} mode="NECK_STRETCH"/>
        <StretchCard title="Hand stretch" setMode={setMode} mode="HAND_STRETCH"/>
        <StretchCard title="Shoulder stretch" setMode={setMode} mode="SHOULDER_STRETCH"/>
        <StretchCard title="Breathing exercise" setMode={setMode} mode="BREATHING"/>
      </ul>
      <Background />
    </HomePageStyled>
  );
}
