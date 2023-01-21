import React from 'react';

import { List, Item, NavLinkStyled } from './AuthNav.styled';
const AuthNav = () => {
  return (
    <List>
      <Item>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      </Item>
      <Item>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
      </Item>
    </List>
  );
};

export default AuthNav;
