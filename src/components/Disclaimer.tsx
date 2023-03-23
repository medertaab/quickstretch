import React, { useState } from "react";
import styled from "styled-components";

export default function Disclaimer() {
  const [open, setOpen] = useState(false);
  const [hiding, setHiding] = useState(false)
  const disclaimer = `The information provided in this app is for educational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition or the suitability of an exercise program for your individual needs. By using this website, you acknowledge that you are performing these exercises at your own risk, and assume full responsibility for any injury or damage that may occur. You should consult with a qualified healthcare provider before starting any new exercise program. By using this website, you agree to release and discharge the app's developers, owners, and affiliates from any and all claims or causes of action, known or unknown, arising out of your use of this website or the information contained therein.`;

  function handleClick() {
    if (open) {
      setHiding(true)
      setTimeout(() => {
        setOpen(false)
        setHiding(false)
      }, 300)
    } else {
      setOpen(true)
    }
  }
  
  return (
    <DisclaimerStyled open={open} hiding={hiding}>
      <button type="button" onClick={handleClick}>
        <span>+</span> Disclaimer
      </button>
      <div className="disclaimer-container">
        {open && <p className="disclaimer">{disclaimer}</p>}
      </div>
    </DisclaimerStyled>
  );
}

const DisclaimerStyled = styled.div<{open : Boolean, hiding: Boolean}>`
  height: 2rem;
  margin-top: auto;
  font-size: 0.8rem;
  width: 100%;
  text-align: right;
  height: fit-content;
  position: relative;
  height: 100%;

  button {
    &:hover {
      border-bottom: 1px solid var(--default-black);
    }
  }

  span {
    display: inline-block;
    transform: ${props => props.open && "rotate(45deg)"};
    transition: 150ms ease-in-out;
  }

  .disclaimer-container {
    position: absolute;
    overflow: hidden;
  }

  .disclaimer {
    text-align: left;
    font-size: 0.7rem;
  }

  .disclaimer::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    width: 100%;
    background-color: var(--default-light);
    animation: ${props => props.open && "slide-reveal 0.3s linear forwards"}${props => props.hiding && ", slide-hide 0.3s linear forwards"};
    box-shadow: 0 0 20px var(--default-light);
  }

  @keyframes slide-reveal {
    0% {
      transform: translateY(0)
    } 100% {
      transform: translateY(110%)
    }
  }

  @keyframes slide-hide {
    0% {
      transform: translateY(110%)
    } 100% {
      transform: translateY(0)
    }
  }
`;
