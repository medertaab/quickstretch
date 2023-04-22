import React from "react";
import styled from "styled-components";
import { buttonIcons } from "../../assets/buttonIcons";

export default function ControlButton(props: any) {
  const { title, onClick, isLast, status, autoplay } = props;

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

const StyledControlButton = styled.button<{ title: String }>`
margin: 0;
  height: 2rem;
  width: 6rem;
  min-width: fit-content;
  border: 3px solid var(--accent);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.1s ease-in-out;
  background-color: ${(props) => props.title === "Resume" && "var(--accent)"};
  background-color: ${(props) => props.title === "Start" && "var(--accent)"};

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.title === "Resume" ? "var(--accent-transparent)" : "var(--accent)"};
    background-color: ${(props) =>
      props.title === "Start" ? "var(--accent-transparent)" : "var(--accent)"};
    span {
      color: #353535;
    }
    svg {
      fill: #353535;
    }
  }

  svg {
    height: 55%;
    fill: var(--default-black);
    transition: 0.1s ease-in-out;
  }

  span {
    font-size: 0.8rem;
    margin-left: 0.2rem;
    color: ${(props) => props.title === "Resume" && "#353535"};
    color: ${(props) => props.title === "Start" && "#353535"};
    transition: 0.1s ease-in-out;
  }
`;

const DisabledButton = styled.button`
  height: 2rem;
  width: 6rem;
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
