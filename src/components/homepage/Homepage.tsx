import React from "react";
import styled from "styled-components";
import Background from "../ui/Background";
import Disclaimer from "./Disclaimer";
import ModeButton from "./ModeButton";
import Navbar from "../Navbar";
import PageLayout from "../ui/PageLayout";

export default function Homepage(props: any) {
  const { setMode } = props;
  return (
    <PageLayout>
      <HomePageStyled className="fade-in">
        <h1 className="logo">🐰 QuickStretch</h1>
        <p className="description">Easy way to relieve muscle tension and improve your wellbeing</p>

        <p className="prompt">Pick an exercise to start:</p>
        <ul className="mode-list">
          <ModeButton title="Neck stretch" setMode={setMode} mode="neck_stretch"/>
          <ModeButton title="Hand stretch" setMode={setMode} mode="hand_stretch"/>
          <ModeButton title="Shoulder stretch" setMode={setMode} mode="shoulder_stretch"/>
          <ModeButton title="Breathing exercise" setMode={setMode} mode="breathing"/>
        </ul>
        <Disclaimer />
      </HomePageStyled>
    </PageLayout>
  );
}

const HomePageStyled = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

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