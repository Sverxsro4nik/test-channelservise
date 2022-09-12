import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthProvider';
import Logo from './Logo';
import LogOut from './LogOut';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: hsl(36, 71%, 64%);
  padding: 27px 41px;
`;

const CabinetWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UsernameContainer = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 800;
  margin-right: 32px;
  &::first-letter{
    text-transform: uppercase;
  }
`;

const Nav = () => {
  const { user } = useAuth();
  return (
    <NavWrapper>
      <Logo />
      {user ? (<CabinetWrapper>
        <UsernameContainer>{user.username}</UsernameContainer>
        <LogOut />
      </CabinetWrapper>) : null
      }
    </NavWrapper>
  );
};

export default Nav;
