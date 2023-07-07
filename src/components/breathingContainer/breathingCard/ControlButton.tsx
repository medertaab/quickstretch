import StartButton from "../../ui/startButton";
import { sprites } from "../../../data/BREATHING";

export default function ControlButton(props: any) {
  const { status, startBreathing, stopBreathing } = props;
  
  if (!status.on)
    return <StartButton onClick={startBreathing} />;

  if (status.on)
    return (
      <button className="control-button" type="button" onClick={stopBreathing}>
        Stop
      </button>
    );

  return <></>;
}
