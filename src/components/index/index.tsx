import Disclaimer from "./disclaimer";
import ModeButton from "./modeButton";
import PageLayout from "../ui/PageLayout";
import { IndexPageStyled } from "./IndexPage.styled";

const modesData = [
  { title: "Neck stretch", mode: "neck_stretch" },
  { title: "Hand stretch", mode: "hand_stretch" },
  { title: "Shoulder stretch", mode: "shoulder_stretch" },
  { title: "Breathing exercise", mode: "breathing" }
]

export default function IndexPage() {
  return (
    <PageLayout>
      <IndexPageStyled>
        <div className="logo">
          <img src="logo.png" alt="Logo image of cute bunny cartoon" />
          <h1>QuickStretch</h1>
        </div>
        <p className="description">
          Easy way to relieve muscle tension and improve your wellbeing
        </p>

        <span className="prompt">Pick an exercise to start:</span>
        <ul className="mode-list">
          {modesData.map((mode, index) => {
            return <ModeButton title={mode.title} mode={mode.mode} key={index} id={index} />
          })}
        </ul>
        <Disclaimer />
      </IndexPageStyled>
    </PageLayout>
  );
}
