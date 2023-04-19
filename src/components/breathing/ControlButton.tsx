import React from "react";

export default function ControlButton(props: any) {
  const { status, startBreathing, stopBreathing } = props;

  if (!status.on)
    return (
      <>
        <p>Press start to begin</p>
        <button
          className="control-button"
          type="button"
          onClick={startBreathing}
        >
          Start
        </button>
      </>
    );
    
  if (status.on)
    return (
      <button className="control-button" type="button" onClick={stopBreathing}>
        Stop
      </button>
    );

  return <></>;
}
