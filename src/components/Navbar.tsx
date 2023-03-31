import React, { useState } from "react";
import styled from "styled-components";
import MenuModal from "./MenuModal";

export default function Navbar(props: any) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NavStyled>
        <button className="menu-toggle" onClick={() => setOpenMenu(!openMenu)} name="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </NavStyled>
      {openMenu && <MenuModal setOpenMenu={setOpenMenu} {...props} />}
    </>
  );
}

const NavStyled = styled.nav`
  width: 100%;
  height: 2rem;
  background-color: var(--default-light);
  border-bottom: 1px solid #21202213;
  text-align: end;
  position: fixed;
  top: 0;
  z-index: 10;

  svg {
    height: 80%;
  }

  .menu-toggle {
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .menu-toggle span {
    display: block;
    width: 1.5rem;
    height: 3px;
    position: relative;
    background: var(--default-black);
    border-radius: 3px;
    margin-bottom: 5px;
  }

  .menu-toggle span:last-child {
    margin-bottom: 0;
  }
`;