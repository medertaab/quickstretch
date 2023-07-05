import styled from "styled-components";

const ModeButtonStyled = styled.li`
  list-style: none;
  width: 14.5rem;
  min-height: 11rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: #ebe9e5;
  cursor: pointer;
  transition: 0.1s ease-in;
  text-align: start;
  position: relative;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.12);

  a {
    width: 100%;
    height: 100%;
  }

  .images {
    width: min-content;
    position: relative;
    margin: 0.5rem auto 0 auto;
    flex: 1;
    z-index: 0;
  }

  img {
    height: 6rem;
    transition: 0.2s ease-in-out;
  }

  .under-image {
    position: absolute;
    left: 0;
    opacity: 0;
    transition: 0.3s ease-in-out;
    z-index: -1;
  }

  .information {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: fit-content;
    min-height: 2.8rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
    color: #353535;
  }

  p {
    font-size: 0.7rem;
    color: #353535;
  }

  .playButton {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 1.3rem;
    width: 1.3rem;
    padding: 0.5rem;
    border-radius: 100%;
    background-color: var(--accent-light);
    float: right;
    margin-top: 0.2rem;
    transition: 0.3s ease-in-out;
  }

  svg {
    height: 1rem;
    width: 1.3rem;
    margin: 0.1rem 0 0.1rem 0.1rem;
  }

  .playButton > svg {
    fill: #353535;
  }

  &:hover {
    .under-image {
      opacity: 100%;
      margin: 0 auto;
    }

    .playButton {
      background-color: var(--accent);
    }
  }

  @media (max-width: 600px) {
    width: 80%;

    a {
      display: grid;
      grid-template: 1fr 1fr / 1.1fr 1fr;
    }

    .images {
      grid-area: 1 / 1 / 3 / 2;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
    }

    .under-image {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
    }

    .information {
      grid-area: 1 / 2 / 2 / 3;
      margin-top: 1rem;
    }

    .playButton {
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    a {
      display: grid;
      grid-template: 1fr 1fr / 1fr 1fr;
    }

    h2 {
      line-height: 1.5rem;
    }
  }
`;

export default ModeButtonStyled;
