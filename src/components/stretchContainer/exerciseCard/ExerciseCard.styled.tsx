import styled from "styled-components";

const ExerciseContainer = styled.div<{ status: String }>`
  display: flex;
  align-items: center;
  max-width: 30rem;
  width: 100%;
  min-height: 250px;
  background-color: var(--accent-transparent);
  border-radius: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  margin-top: 1rem;
  position: relative;

  .exercise-info {
    flex: 1;
    width: 100%;
  }

  .status {
    height: 1rem;
    font-size: 0.9rem;
    padding: 0.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    animation: ${(props) =>
      props.status === "break" ? "glow 1s ease-in-out infinite" : "none"};
  }

  .instructions {
    padding: 0;
  }

  .instructions > li {
    text-align: left;
    font-size: 0.8rem;
    margin-top: 0.8rem;
    list-style: none;
    animation: ${(props) =>
      props.status === "break"
        ? "text-shimmer 1s ease-in-out infinite"
        : "none"};
  }

  @keyframes glow {
    0% {
      color: var(--default-black);
    }
    50% {
      color: green;
    }
    100% {
      color: var(--default-black);
    }
  }

  @keyframes text-shimmer {
    0% {
      opacity: 100%;
    }
    50% {
      opacity: 50%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    margin-top: 0;
    padding: 0.5rem 1rem;
    align-items: center;
    justify-content: center;
    
    .exercise-info {
      height: fit-content;
      padding: 0;
      margin: 0;
    }
  }
`;

export default ExerciseContainer;
