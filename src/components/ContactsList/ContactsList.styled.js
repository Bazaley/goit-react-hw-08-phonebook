import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import { RxUpdate } from 'react-icons/rx';

export const Item = styled.li`
  width: calc((100% - 60px) / 3);
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 20px 0;
  border: 2px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #82acfb;
  opacity: 0.9;

  &:not(:nth-child(3n)) {
    margin-right: 30px;
  }
`;

export const Button = styled.button`
  background-color: transparent;

  border: none;
  cursor: pointer;
`;

export const ImCrossStyled = styled(ImCross)`
  color: black;
  transition: color 250ms linear;

  &:hover {
    color: red;
  }
`;

export const GrUpdateStyled = styled(RxUpdate)`
  fill: white;
  color: white;
  transition: color 250ms linear;

  &:hover {
    color: greenyellow;
  }
`;
