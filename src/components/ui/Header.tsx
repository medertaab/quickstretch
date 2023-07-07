import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MenuModal from "./menuModal";
import styled from "styled-components";

export default function Header(props: any) {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation().pathname;

  return (
    <>
      <NavStyled>
        {/* Show logo on sub- */}
        {location !== "/" && (
          <Link to="/" className="logo">
            <img src="logo.png" alt="Logo image of cute bunny drawing" />
          </Link>
        )}
        <button
          className="menu-toggle"
          onClick={() => setOpenMenu(!openMenu)}
          title="Open menu"
        >
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
  height: 2.5rem;
  background-color: var(--default-light);
  border-bottom: 1px solid #21202213;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;

  .logo {
    display: flex;
  }

  .logo img {
    height: 2rem;
    margin-left: 0.5rem;
  }

  .logo img:hover {
    animation: shake 0.5s linear;
  }

  svg {
    height: 80%;
  }

  .menu-toggle {
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-left: auto;
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
