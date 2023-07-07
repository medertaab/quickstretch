import styled from "styled-components";

export const StartButtonStyled = styled.button`
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