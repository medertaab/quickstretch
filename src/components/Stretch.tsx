import React, { useEffect, useState, useRef } from "react";

export default function Stretch(props: any) {
  const { mode, setMode } = props;
  return (
    <>
      <button type="button" onClick={() => setMode("")}>
        Go back
      </button>
      <h2>{mode}</h2>
    </>
  );
}
