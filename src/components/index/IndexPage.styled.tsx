import styled from "styled-components";

const IndexPageStyled = styled.main`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    animation: slide-up 200ms ease-in forwards;
  }

  .logo img {
    height: 2rem;
    margin-right: 0.2rem;
    animation: shake-infinite 3s linear 1s infinite;
  }

  .description {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0%;
    animation: slide-up 200ms ease-in 150ms forwards;
  }

  .prompt {
    margin: 1rem auto 0 auto;
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0%;
    animation: slide-up 200ms ease-in 300ms forwards;
  }

  .mode-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    gap: 1.5rem;
    max-width: max-content;
    justify-content: center;
  }

  .mode-list > li {
    opacity: 0%;
    animation: pop-in 300ms ease-in 600ms forwards;
  }

  @media (max-width: 600px) {
    margin: 2rem;
  }
`;

const Greeting = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("/greeting/greeting1.png");
  background-repeat: no-repeat;
  background-position: center;
  animation: bg-switch 1s infinite;

  @keyframes bg-switch {
    0% {
      background-image: url("/greeting/greeting1.png");
    }
    50% {
      background-image: url("/greeting/greeting2.png");
    }
    100% {
      background-image: url("/greeting/greeting1.png");
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export { IndexPageStyled, Greeting };
