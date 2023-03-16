import styled from "styled-components";

const buttonIcons: { [key: string]: JSX.Element } = {
  Pause: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
    </svg>
  ),
  Resume: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
    </svg>
  ),
  Stop: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
    </svg>
  ),
  Skip: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z" />
    </svg>
  ),
};

export const StretchPage = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  min-height: 650px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: #ffffff5a;
  border-radius: 1rem;
  cursor: default;

  .button-back {
    left: 0;
    margin-left: 1rem;
    position: absolute;
  }

  .button-back > img {
    height: 1.5rem;
    width: 1.5rem;
  }

  .exercise-text {
    min-height: 170px;
  }

  h3 {
    margin-top: 1rem;
  }

  p {
    font-style: italic;
    font-size: 0.9rem;
    opacity: 80%;
    margin-top: 0.5rem;
  }

  .stretch-details {
    font-size: 0.8rem;
    width: 80%;
  }

  .controlButtons {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;

export const Timer = styled.div<{ isPaused: Boolean, status : String }>`
  height: 3.5rem;
  aspect-ratio: 1/1;
  margin-top: 1rem;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid
    ${(props) => (props.isPaused || props.status === "break" ? "var(--secondary-accent)" : "var(--accent-color)")};
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
    transform: scaleX(130%)
  }
`;

const StartButtonStyled = styled.button`
  height: 3.5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: none;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-color);
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

export const ExerciseContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;



  li {
    text-align: left;
    font-size: 0.9rem;
    margin-top: 0.3rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
` 

export function StartButton(props: any) {
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

const StyledControlButton = styled.button`
  height: 2rem;
  width: 5rem;
  min-width: fit-content;
  border: 2px solid var(--accent-color);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-color);
  }

  svg {
    height: 55%;
    fill: var(--default-black);
  }

  span {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
`;

const DisabledButton = styled.button`
  height: 2rem;
  width: 5rem;
  min-width: fit-content;
  border: 2px solid var(--default-black);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--default-black);
  opacity: 50%;

  svg {
    height: 55%;
    fill: var(--default-black);
  }

  span {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
`;

export function ControlButton(props: any) {
  const { title, onClick, isLast, status } = props;

  if (isLast || status === "off") {
    return (
      <DisabledButton title={title} type="button" disabled onClick={onClick}>
        {buttonIcons[title]}
        <span>{title}</span>
      </DisabledButton>
    );
  } 
  
  return (
    <StyledControlButton title={title} type="button" onClick={onClick}>
      {buttonIcons[title]}
      <span>{title}</span>
    </StyledControlButton>
  );
}
