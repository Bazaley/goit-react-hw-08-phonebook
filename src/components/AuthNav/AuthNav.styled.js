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
  font-size: 18px;
  font-weight: 600;
  &.active {
    text-shadow: 2px 1px white;
  }

  &.active::after {
    display: block;
    content: '';
    background-color: white;
    width: 100%;
    height: 2px;
    border-radius: 4px;
  }
`;
