import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function ToggleButton(props : any) {
  const { on, toggle, children } = props
  return (
    <Toggle on={on}>
      {children}
      <input type="checkbox" checked={on} onClick={toggle} />
      <span className="toggle-on">
        <span className="toggle-button"></span>
      </span>
    </Toggle>
  )
}

const Toggle = styled.label<{on : Boolean}>`

  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .toggle-on {
    margin-left: 0.5rem;
    width: 2.2rem;
    height: 1.2rem;
    border: 3px solid ${props => props.on ? "var(--accent-dark)" : "#b1b1b1"};
    border-radius: 1rem;
    display: inline-block;
    top: 0;
    left: 0;
    background-color: ${props => props.on ? "var(--accent-dark)" : "#b1b1b1"};
    position: relative;
  }

  .toggle-button {
    position: absolute;
    left: ${props => props.on ? "1rem" : "0"};
    border-radius: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    background-color: var(--default-light);
    transition: all 0.1s ease-in-out;
  }
`