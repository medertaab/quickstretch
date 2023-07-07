import { useEffect, useState, useRef } from "react";
import { sprites, duration } from "../../../../data/BREATHING";
import { BreathingCircleStyled } from "./BreathingCircle.styled";
import Instructions from "../Instructions";

export default function BreathingCircle(props: any) {
  const { status, breathingRef, setStatus } = props;
  const [sprite, setSprite] = useState(0);
  let spriteRef: any = useRef(null);

  // Stop animation when all frames were shown
  useEffect(() => {
    if (sprite === sprites[status.mode].length - 1) {
      clearInterval(spriteRef.current);
    }
  }, [sprite]);

  // Stop animation when stop is pressed
  useEffect(() => {
    if (!status.on) {
      clearInterval(spriteRef.current);
    }
  }, [status]);

  function animateSprite() {
    spriteRef.current = setInterval(() => {
      setSprite((prev) => prev + 1);
    }, 400);
  }

  // Handling circle animation
  useEffect(() => {
    if (!status.on) return;

    if (status.mode === "hold") {
      setSprite(0);
      breathingRef.current = setTimeout(() => {
        setStatus({ on: true, mode: "out", text: "Slowly breathe out" });
      }, duration.hold);
    }

    if (status.mode === "out") {
      setSprite(0);
      breathingRef.current = setTimeout(() => {
        setStatus({ on: true, mode: "rest", text: "Slowly breathe out" });
      }, duration.out);
      animateSprite();
    }

    if (status.mode === "rest") {
      setSprite(0);
      breathingRef.current = setTimeout(() => {
        setStatus({ on: true, mode: "in", text: "Slowly breathe in" });
      }, duration.rest);
    }

    if (status.mode === "in") {
      setSprite(0);
      breathingRef.current = setTimeout(() => {
        setStatus({ on: true, mode: "hold", text: "Hold your breath" });
      }, duration.in);
      animateSprite();
    }
  }, [status, breathingRef]);

  return (
    <>
      <BreathingCircleStyled>
        <div className={`topCircle ${status.mode}`}></div>
        <div className="bottomCircle"></div>
        {!status.on && <img className="sprite" src={sprites.in[0]}></img>}
        {status.on && (
          <img className="sprite" src={sprites[status.mode][sprite]} alt="Image of bunny showing current breathing status"></img>
        )}
      </BreathingCircleStyled>
      <Instructions status={status}/>
    </>
  );
}
