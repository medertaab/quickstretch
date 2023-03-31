import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToggleButton from "./ui/ToggleButton";
import { useTheme } from "../hooks/ThemeContext";
import { useAutoplay } from "../hooks/AutoplayContext";

export default function Menu(props: any) {
  const { theme, toggleTheme } = useTheme() as any;
  const { autoplay, toggleAutoplay } = useAutoplay() as any;
  const { setOpenMenu } = props;

  // Prevent bubbling
  function menuClick(e: any) {
    e.stopPropagation();
  }

  // Make current streaks object
  const currentStreaks = Object.keys(localStorage).reduce(
    (acc: any, val: any) => {
      const keys = Object.keys(localStorage);
      if (val.includes("streak") && !val.includes("max")) {
        const keyname = val.split("_")[0].toLowerCase();
        acc[keyname] = localStorage.getItem(val);
      }
      return acc;
    },
    {}
  );

  return (
    <MenuStyled onClick={() => setOpenMenu(false)} className="slide-up-fast">
      <div className="menu-container" onClick={menuClick}>
        <button type="button" onClick={() => setOpenMenu(false)} name="Close menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
        </button>

        <ToggleButton toggle={toggleTheme} on={theme === "dark"}>
          Dark mode:
        </ToggleButton>
        <ToggleButton toggle={toggleAutoplay} on={autoplay}>
          Default autoplay:
        </ToggleButton>

        <h3>Current streaks:</h3>
        <ul className="streaks">
          {Object.keys(currentStreaks).length < 1 && (
            "Complete an exercise to get a streak going"
          )}
          {Object.keys(currentStreaks).map((key) => {
            return (
              <li>
                <span>{key} stretch: </span>
                <span>
                  {currentStreaks[key]}{" "}
                  {currentStreaks[key] === "1" ? "day" : "days"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
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
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px #1f1f1f45;
    position: relative;
    border: 2px solid ${({ theme }) => theme.default};

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
`;
