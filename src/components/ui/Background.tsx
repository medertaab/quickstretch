import React from "react";
import styled from "styled-components";
import { useTheme } from "../../hooks/ThemeContext";

export default function Background() {
  const { theme } = useTheme() as any
  return (
    <FlowingBackground theme={theme}>
      <svg
          className="grain"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feBlend mode="overlay" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      <svg
        className="star"
        viewBox="0 0 148 148"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M65.8248 4.60514C69.8082 -1.04953 78.1918 -1.04953 82.1752 4.60514L84.9187 8.49965C87.7011 12.4495 92.9097 13.8451 97.2943 11.8157L101.617 9.81469C107.895 6.90931 115.155 11.1011 115.777 17.9899L116.206 22.7344C116.641 27.5463 120.454 31.3592 125.266 31.794L130.01 32.2226C136.899 32.845 141.091 40.1054 138.185 46.3825L136.184 50.7057C134.155 55.0903 135.55 60.2989 139.5 63.0813L143.395 65.8248C149.05 69.8082 149.05 78.1918 143.395 82.1752L139.5 84.9187C135.55 87.7011 134.155 92.9097 136.184 97.2943L138.185 101.617C141.091 107.895 136.899 115.155 130.01 115.777L125.266 116.206C120.454 116.641 116.641 120.454 116.206 125.266L115.777 130.01C115.155 136.899 107.895 141.091 101.617 138.185L97.2943 136.184C92.9097 134.155 87.7011 135.55 84.9187 139.5L82.1752 143.395C78.1918 149.05 69.8082 149.05 65.8248 143.395L63.0813 139.5C60.2989 135.55 55.0903 134.155 50.7057 136.184L46.3825 138.185C40.1054 141.091 32.845 136.899 32.2226 130.01L31.794 125.266C31.3592 120.454 27.5463 116.641 22.7344 116.206L17.9899 115.777C11.1011 115.155 6.90931 107.895 9.81469 101.617L11.8157 97.2943C13.8451 92.9097 12.4495 87.7011 8.49965 84.9187L4.60514 82.1752C-1.04953 78.1918 -1.04953 69.8082 4.60514 65.8248L8.49965 63.0813C12.4495 60.2989 13.8451 55.0903 11.8157 50.7057L9.81469 46.3825C6.90931 40.1054 11.1011 32.845 17.9899 32.2226L22.7344 31.794C27.5463 31.3592 31.3592 27.5463 31.794 22.7344L32.2226 17.9899C32.845 11.1011 40.1054 6.90931 46.3825 9.81469L50.7057 11.8157C55.0903 13.8451 60.2989 12.4495 63.0813 8.49965L65.8248 4.60514Z" />
      </svg>
    </FlowingBackground>
  );
}

const FlowingBackground = styled.div<{theme : String}>`
  max-height: 100%;
  inset: 0;
  position: fixed;
  z-index: -10;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .grain {
    position: absolute;
    height: 100%;
    width: 100%;
    filter: contrast(170%);
    opacity: ${(props : any) => props.theme === "dark" ? "10%" : "20%"};
  }

  .star {
    fill: #92e723;
    animation: fade-in 0.5s ease-in, rotate 17s infinite linear;
    filter: blur(10px);
    width: 80%;
    min-width: 500px;
    max-width: 30rem;
    opacity: 30%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 30%;
    }
  }
`;
