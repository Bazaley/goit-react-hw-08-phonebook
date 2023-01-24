import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Paragraph = styled.p`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 600;
`;

export const Button = styled.button`
  display: block;
  margin-left: 20px;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid black;
  color: white;
  border-radius: 4px;

  cursor: pointer;

  transition: color 250ms linear;
  min-width: 70px;
  min-height: 33px;

  &:hover {
    color: black;
  }
`;
