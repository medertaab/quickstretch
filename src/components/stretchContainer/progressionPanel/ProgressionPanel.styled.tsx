import styled from "styled-components";

export const ProgressionBarStyled = styled.div`
  position: relative;
  max-width: 31rem;
  width: 100%;

  & > *:last-child {
    position: absolute;
    top: 0;
    right: 0;
  }

  .progress-circles {
    margin-top: 0.5rem;
  }

  .control-buttons-container {
    padding: 0;
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  @media (max-width: 550px) {
    & > *:last-child {
      right: -1rem;
    }
  }
`;

export const ProgressCircle = styled.div<{ complete: Boolean }>`
  display: inline-block;
  height: 9px;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: ${(props) =>
    props.complete ? "var(--accent)" : "var(--default-black)"};
  opacity: ${(props) => (props.complete ? "100%" : "40%")};
  margin: 0 3px;
`;
