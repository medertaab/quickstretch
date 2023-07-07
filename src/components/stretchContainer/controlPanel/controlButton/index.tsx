import React from "react";
import styled from "styled-components";
import { buttonIcons } from "../../../../assets/buttonIcons";
import { StyledControlButton, DisabledControlButton } from "./ControlButton.styled";

export default function ControlButton(props: any) {
  const { title, onClick, isLast, status, autoplay } = props;

  if (isLast || status === "off") {
    return (
      <DisabledControlButton title={title} type="button" disabled onClick={onClick}>
        {buttonIcons[title]}
        <span>{title}</span>
      </DisabledControlButton>
    );
  }

  return (
    <StyledControlButton title={title} type="button" onClick={onClick}>
      {buttonIcons[title]}
      <span>{title}</span>
    </StyledControlButton>
  );
}