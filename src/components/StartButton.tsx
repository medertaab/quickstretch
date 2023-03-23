import React from 'react'
import styled from 'styled-components';

export default function StartButton(props: any) {
  return (
    <StartButtonStyled
      type="button"
      onClick={props.onClick}
      title="Start exercises"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
      </svg>
    </StartButtonStyled>
  );
}

const StartButtonStyled = styled.button`
  height: 3.5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: none;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent);
  transition: 0.1s ease-in-out;

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
  }

  svg {
    height: 55%;
    margin-left: 5%;
    fill: var(--default-black);
  }
`;