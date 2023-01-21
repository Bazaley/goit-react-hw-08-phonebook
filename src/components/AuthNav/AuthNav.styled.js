import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: blue;
    text-decoration: underline 2px;
  }
`;
