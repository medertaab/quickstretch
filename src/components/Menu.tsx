import React from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

export default function Menu(props: any) {
  const { setOpenMenu } = props;
  return (
    <MenuStyled>
      <div className="menu-container">
        <button
          className="close-button"
          type="button"
          onClick={() => setOpenMenu(false)}
        >
          ❌
        </button>

        <ToggleButton>
          Dark mode
        </ToggleButton>
        <br/>
        <ToggleButton>
          Exercise autoplay:
        </ToggleButton>

        <div>
          <h3>Streaks:</h3>
        </div>
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #ffffff40;
  backdrop-filter: blur(5px);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  .menu-container {
    min-height: 10rem;
    min-width: 15rem;
    background-color: var(--default-light);
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px #1f1f1f45;
    position: relative;
    border: 2px solid ${({theme}) => theme.default};
  }

  .close-button {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.5rem;
    padding: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
