import React from "react";
import styled from "styled-components";
import StretchCard from "./StretchCard";

export default function Homepage(props: any) {
  const { setMode } = props;
  return (
    <main>
      <h1>QuickStretch</h1>

      <p>Choose your exercise ^_^</p>

      <ul className="mode-list">
        <li onClick={() => setMode("NECK_STRETCH")}>
          <StretchCard title="Neck stretch"/>
        </li>
        <li onClick={() => setMode("HAND_STRETCH")}>
          <StretchCard title="Hand stretch" />
        </li>
        <li onClick={() => setMode("SHOULDER_STRETCH")}>
          <StretchCard title="Shoulder stretch" />
        </li>
        <li onClick={() => setMode("BREATHING")}>
          <StretchCard title="Breathing exercise" />
        </li>
      </ul>
    </main>
  );
}
