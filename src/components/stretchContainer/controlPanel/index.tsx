import ControlButton from "./controlButton";
import styled from "styled-components";

export default function ControlPanel({
  controls,
  currentAutoplay,
  status,
  isPaused,
  isLast,
}: any) {
  return (
    <ControlsContainer>
      <ControlButton
        title="Stop"
        onClick={controls.stop}
        status={status}
      />
      {isPaused && currentAutoplay && (
        <ControlButton title="Resume" onClick={controls.resume} />
      )}
      {isPaused && !currentAutoplay && (
        <ControlButton title="Start" onClick={controls.resume} />
      )}
      {!isPaused && (
        <ControlButton
          title="Pause"
          onClick={controls.pause}
          status={status}
        />
      )}
      <ControlButton
        title="Skip"
        onClick={controls.skip}
        isLast={isLast}
        status={status}
      />
    </ControlsContainer>
  );
}

const ControlsContainer = styled.ul`
    padding: 0;
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
`