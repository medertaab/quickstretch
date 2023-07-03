import styled from "styled-components";

export const StretchPage = styled.div`
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

  .button-back {
    left: 0;
    margin-left: 1rem;
    position: absolute;

    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  .under-exercise {
    position: relative;
    max-width: 31rem;
    width: 100%;
  }

  .under-exercise > *:last-child {
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
    max-height: 100%;
    max-width: 100%;

    .under-exercise > *:last-child {
      right: -1rem;
    }
  }
`;

export const TextData = styled.div<{ status: String }>`
  max-width: 80%;
  margin-top: 0.1rem;

  p {
    font-size: 0.8rem;
    opacity: 80%;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    p {
      display: ${(props: any) => props.status !== "off" && "none"};
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

export const Timer = styled.div<{
  isPaused: Boolean;
  status: String;
  autoplay: Boolean;
}>`
  height: 3.5rem;
  aspect-ratio: 1/1;
  margin-top: 0.5rem;
  border-radius: 50%;
  box-sizing: border-box;
  color: var(--default-black);
  border: 3px solid
    ${(props) =>
      props.isPaused || props.status === "break"
        ? "var(--secondary-accent)"
        : "var(--accent)"};
  border: 3px solid
    ${(props) =>
      props.isPaused && !props.autoplay
        ? "var(--accent-transparent2)"
        : "var(--accent)"};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s ease-in-out;
  position: relative;

  span {
    position: absolute;
    top: 1.5rem;
    font-size: 1.5rem;
    opacity: 60%;
  }
`;
