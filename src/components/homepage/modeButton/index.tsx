import { ALL_STRETCHES } from "../../../data/ALL_STRETCHES";
import { Link } from "react-router-dom";
import ModeButtonStyled from "./ModeButton.style";


export default function ModeButton(props: any) {
  const { title, mode } = props;

  const duration = ALL_STRETCHES[mode]?.exercises.reduce((acc, val) => {
    return (acc = acc + val.duration + 5);
  }, 0);
  const durationRounded = Math.round((duration / 60) * 2) / 2;

  return (
    <ModeButtonStyled>
      <Link to={mode === "breathing" ? "/breathing" : `/${mode}`}>
        <div className="images">
          <img src={`/card_images/${mode}.png`} alt={`${mode} mode illustration`} />
          <img
            src={`/card_images/${mode}_under.png`}
            className="under-image"
            alt={`${mode} mode highlighted`}
          />
        </div>
        <div className="information">
          <h2>{title}</h2>
          {mode !== "breathing" && <p>{durationRounded} min</p>}
        </div>
        <div className="playButton">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg>
        </div>
      </Link>
    </ModeButtonStyled>
  );
}

