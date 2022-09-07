import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo 2.svg';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: hsl(36, 71%, 64%);
  padding: 27px 41px;
`
const LogoWrapper = styled.div`
  width: 273px;
  height: auto;
`

const Nav = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <img src={logoImage} alt="logo" />
      </LogoWrapper>
    </NavWrapper>
  )
}

export default Nav;