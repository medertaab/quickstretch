import React from "react";
import styled from "styled-components";
import { ALL_STRETCHES } from "../../data/ALL_STRETCHES";
import { Link } from "react-router-dom";

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
          <img src={`/card_images/${mode}.png`} alt={`${mode}`}/>
          <img src={`/card_images/${mode}_under.png`} className="under-image" alt={`${mode}-highlighted`}/>
        </div>
        <h2>{title}</h2>
        {mode !== "breathing" && <p>{durationRounded} min</p>}
      </Link>
    </ModeButtonStyled>
  );
}

const ModeButtonStyled = styled.li`
  list-style: none;
  width: 14rem;
  min-height: 185px;
  border: 2px solid var(--default-black);
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  background-color: #ebe9e5a0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in;
  position: relative;
  overflow: hidden;
  
  a {
    width: 100%;
    height: 100%;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #353535
  }

  p {
    font-size: 0.7rem;
    color: #353535;
  }

  .images {
    width: min-content;
    position: relative;
    margin: 0.5rem auto 0 auto;
  }

  img {
    height: 6rem;
    transition: 0.2s ease-in-out;
    
  }

  .under-image {
    position: absolute;
    left: 0;
    opacity: 0%;
    transition: 0.15s ease-in-out;
    z-index: -1;
  }

 
  &:hover {
    .under-image {
      opacity: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
