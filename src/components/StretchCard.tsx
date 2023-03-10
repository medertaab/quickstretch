import React from "react";
import styled from "styled-components";

const StretchCardStyled = styled.div`
  
  width: 300px;
  max-height: 200px;
  background-color: white;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  cursor: pointer;
`

export default function StretchCard(props: any) {
  return (
    <StretchCardStyled>
      <h2>{props.title}</h2>
      <img src={props.image}/>
    </StretchCardStyled>
  );
}
