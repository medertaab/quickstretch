import ToggleButton from "../../ui/ToggleButton";
import { ProgressionBarStyled, ProgressCircle } from "./ProgressionPanel.styled";

export default function ProgressionPanel({progress, currentAutoplay, setCurrentAutoplay} : any) {
  return (
    <ProgressionBarStyled>
      <div className="progress-circles">
        {Object.keys(progress).map((key) => {
          return <ProgressCircle complete={progress[key]} key={key} />;
        })}
      </div>
      <ToggleButton
        on={currentAutoplay}
        toggle={() => setCurrentAutoplay((prev: any) => !prev)}
      >
        Autoplay
      </ToggleButton>
    </ProgressionBarStyled>
  );
}
