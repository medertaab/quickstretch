import Disclaimer from "./Disclaimer";
import ModeButton from "./ModeButton";
import PageLayout from "../ui/PageLayout";
import HomePageStyled from "../../styles/Homepage.styled";

export default function Homepage() {
  return (
    <PageLayout>
      <HomePageStyled>
        <div className="logo">
          <img src="logo.png" alt="Logo image of cute bunny cartoon"/>
          <h1>QuickStretch</h1>
        </div>
        <p className="description">Easy way to relieve muscle tension and improve your wellbeing</p>

        <span className="prompt">Pick an exercise to start:</span>
        <ul className="mode-list">
          <ModeButton title="Neck stretch" mode="neck_stretch" />
          <ModeButton title="Hand stretch" mode="hand_stretch" />
          <ModeButton title="Shoulder stretch" mode="shoulder_stretch" />
          <ModeButton title="Breathing exercise" mode="breathing" />
        </ul>
        <Disclaimer />
      </HomePageStyled>
    </PageLayout>
  );
}

