import styled from "styled-components";

export const StretchContainer = styled.main`
  box-sizing: border-box;
  padding: 2rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background-color: var(--default-light-transparent);
  border-radius: 1rem;
  cursor: default;
  max-height: 38rem;
  height: 100%;
  max-width: 50rem;
  width: 100%;
  animation: fade-in 300ms ease-in forwards;
  min-height: 620px;

  @media (max-width: 550px) {
    max-height: 100%;
    max-width: 100%;
    padding: 1rem 2rem 0rem 2rem;
  }
`;
