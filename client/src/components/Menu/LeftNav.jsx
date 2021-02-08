import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Menu = styled.div`
  z-index: 10;
  list-style: none;
  margin-block-start: 0;
  font-weight: bold;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-200%)'};
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  padding-left: 3rem;
  padding-top: .5rem;
  transition: transform 0.3s ease-in-out;

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .menu {
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #44bac4;
    font-size: 18px;
    margin: .5rem ;
    padding: 7px;
    

    &:hover {
      cursor: pointer;
      color: #000000;
    }

  }

  img {
    padding-right: 5px;
    width: 35px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    padding-top: 5rem;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    .nav {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .menu {
      z-index: 10;
      width: 80%;
      background-color: #ffffff;
      border-radius: 5px;
      font-size : 22px;
    }
    
  }
  

`;

const LeftNav = ({ open, setOpen }) => {
  return (
    <Menu open={open}>
      <div className="nav">
        <NavLink className="menu" onClick={() => setOpen(!open)} to='/'>Accueil</NavLink>
        <NavLink className="menu" onClick={() => setOpen(!open)} to='/blog'>Blog</NavLink>
        <NavLink className="menu" onClick={() => setOpen(!open)} to='/contact'>Contact</NavLink>
      </div>
    </Menu>
  )
}

export default LeftNav
;