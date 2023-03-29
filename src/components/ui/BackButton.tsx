import React from "react";
import ArrowLeft from "../../assets/arrow-left-solid.svg";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to="/">
      <span className="button-back">
        <img src={ArrowLeft}></img>
      </span>
    </Link>
  );
}
