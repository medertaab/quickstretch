import styled from "styled-components";

export const MenuStyled = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  background-color: var(--backdrop);
  backdrop-filter: blur(5px);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  .menu-container {
    min-height: 10rem;
    min-width: 15rem;
    background-color: var(--default-light);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 20px #2c003a1f;
    position: relative;

    button {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 1.5rem;
      padding: 0.5rem;
      color: var(--default-black);

      svg {
        fill: var(--default-black);
      }

      &:hover {
        cursor: pointer;
      }
    }

    h3 {
      margin-top: 1rem;
    }

    .streaks {
      list-style: none;
      margin: 0;
      padding: 0;
      margin-top: 0.5rem;
      font-size: 0.9rem;
      color: var(--default-black);

      li {
        display: flex;
        justify-content: space-between;
        width: 10rem;
      }

      li *::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .copyright {
    font-size: 0.8rem;
    float: right;
    opacity: 50%;
    color: black;
    text-decoration: underline;
  }
`;