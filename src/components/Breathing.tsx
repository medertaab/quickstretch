import React, { useState, useEffect, useRef } from "react";

export default function Breathing(props: any) {
  const { setMode } = props;
  return (
    <>
      <button onClick={() => setMode("")}>Back</button>
      <div>Breathing</div>
    </>
  );
}
