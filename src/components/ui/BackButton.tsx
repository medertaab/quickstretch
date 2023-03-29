import React from "react";
import ArrowLeft from "../../assets/arrow-left-solid.svg";

export default function BackButton() {
  return (
    <a className="button-back" href="/">
      <img src={ArrowLeft}></img>
    </a>
  );
}
