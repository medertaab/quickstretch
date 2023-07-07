import StartButton from "../../ui/startButton";
import useImagePreloader from "../../../hooks/useImagePreloader";
import { sprites } from "../../../data/BREATHING";
import Loader from "../../ui/loader";

export default function ControlButton(props: any) {
  const { status, startBreathing, stopBreathing } = props;

  const imageURLs = Object.keys(sprites).reduce((acc: any, val: any) => {
    return [...acc, ...sprites[val]];
  }, []);
  const { isPreloaded } = useImagePreloader(imageURLs);

  if (!status.on && !isPreloaded) return <Loader />;

  if (!status.on && isPreloaded)
    return <StartButton onClick={startBreathing} />;

  if (status.on)
    return (
      <button className="control-button" type="button" onClick={stopBreathing}>
        Stop
      </button>
    );

  return <></>;
}
