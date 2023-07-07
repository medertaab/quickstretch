import styled from "styled-components";

export const TimerStyled = styled.div<{
  isPaused: Boolean;
  status: String;
  autoplay: Boolean;
}>`
  height: 3.5rem;
  min-height: 3.5rem;
  min-width: 3.5rem;
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
