import React from "react";
import styled from "styled-components";
import { ALL_STRETCHES } from "../../assets/ALL_STRETCHES";

export default function StretchCard(props: any) {
  const { title, mode, setMode } = props;

  const duration = ALL_STRETCHES[mode]?.exercises.reduce((acc, val) => {
    return (acc = acc + val.duration + 5);
  }, 0);
  const durationRounded = Math.round((duration / 60) * 2) / 2;

  return (
    <StretchCardStyled href={`/${mode.toLowerCase()}`}>
      <div className="images">
        <img src={`/card_images/${mode}.png`} />
        <img src={`/card_images/${mode}_under.png`} className="under-image"/>
      </div>
      <h2>{title}</h2>
      {mode !== "BREATHING" && <p>{durationRounded} min</p>}
    </StretchCardStyled>
  );
}

const StretchCardStyled = styled.a`
  list-style: none;
  width: 14rem;
  min-height: 185px;
  border: 2px solid var(--default-black);
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  background-color: #ebe9e542;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in;

  &:link {
    text-decoration: none;
  }

  &:hover {
    .under-image {
      opacity: 100%;
    }
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    font-size: 0.7rem;
  }

  .images {
    position: relative;
  }

  .under-image {
    position: absolute;
    opacity: 0%;
    transition: 0.2s ease-in-out;
  }
 
  img {
    left: 0;
    height: 6rem;
    margin-top: 0.5rem;
    transition: 0.2s ease-in-out;
    z-index: -1;
  }

  @media (width < 600px) {
    width: 80%
  }
`;
