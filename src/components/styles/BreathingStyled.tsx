import styled from "styled-components";

export const BreathingExercise = styled.div`
  box-sizing: border-box;
  padding: 2rem;
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

    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  .exercise-details {
    max-width: 80%;
    margin-top: 0.1rem;
    font-size: 0.7rem;
    opacity: 80%;
    font-style: italic;
  }

  .control-button {
    height: 2rem;
    width: 6rem;
    margin-top: 1rem;
    min-width: fit-content;
    border-radius: 1rem;
    transition: 0.1s ease-in-out;
    background-color: var(--accent);
    cursor: pointer;

    &:hover {
      background-color: var(--accent-transparent);
    }
  }
`;

export const BreathingCircle = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  margin: 0 auto;

  .topCircle {
    height: 0%;
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    animation: circle 10s infinite ease-in-out;
    transition: background-color 0.1s linear;
  }

  .topCircle.in {
    height: 79%;
    background-color: rgba(21, 219, 219, 0.765);
    transition: height 4.5s, background-color 4.5s linear;
  }

  .topCircle.hold {
    height: 79%;
    background-color: rgba(21, 219, 219, 0.765);
  }

  .topCircle.out {
    height: 20%;
    background-color: white;
    transition: height 5s, background-color 5s linear;
  }

  .topCircle.rest {
    background-color: white;
    height: 20%;
  }

  .bottomCircle {
    position: absolute;
    aspect-ratio: 1;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.368);
    border-radius: 50%;
    z-index: -0.5;
    border: 3px solid rgba(21, 219, 219, 0.765);
  }
`;
