import React from "react";
import Disclaimer from "./Disclaimer";
import ModeButton from "./ModeButton";
import PageLayout from "../ui/PageLayout";
import HomePageStyled from "../../styles/Homepage.styled";

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

