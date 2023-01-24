import React from 'react';

import { List, Item, NavLinkStyled } from './AuthNav.styled';
const AuthNav = () => {
  return (
    <List>
      <Item>
        <NavLinkStyled to="/login">Sign in</NavLinkStyled>
      </Item>
      <Item>
        <NavLinkStyled to="/register">Sign up</NavLinkStyled>
      </Item>
    </List>
  );
};

export default AuthNav;
