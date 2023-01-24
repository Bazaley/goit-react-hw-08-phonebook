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
  margin-left: 20px;
  background-color: #4a6c5d;
  font-size: 15px;
  font-weight: 600;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 7px;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #60aa89;
  }
`;
