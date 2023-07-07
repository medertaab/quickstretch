import styled from "styled-components";

export default function Loader() {
  return (
    <LoaderStyled>
      <svg version="1.1" width="50px" height="50px" viewBox="0 0 50 50">
        <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"></path>
      </svg>
    </LoaderStyled>
  );
}

export const LoaderStyled = styled.div`
  min-height: 3.5rem;
  min-width: 3.5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: none;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent);
  transition: 0.1s ease-in-out;

  svg {
    fill: var(--default-black);
    margin: auto;
    display: block;
    height: 2rem;
    width: 2rem;
    animation: rotate 1s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
