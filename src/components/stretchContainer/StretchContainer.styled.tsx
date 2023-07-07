import styled from "styled-components";

export const StretchContainer = styled.main`
  box-sizing: border-box;
  padding: 2rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: var(--default-light-transparent);
  border-radius: 1rem;
  cursor: default;
  max-height: 38rem;
  height: 100%;
  max-width: 50rem;
  width: 100%;

  @media (max-width: 550px) {
    max-height: 100%;
    max-width: 100%;
  }
`;
