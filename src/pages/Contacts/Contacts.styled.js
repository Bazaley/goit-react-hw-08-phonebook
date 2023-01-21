import styled from 'styled-components';
import image from '../../images/1642991819_1-phonoteka-org-p-fon-dlya-prezentatsii-kniga-raskritaya-1.png';

export const Table = styled.table`
  min-width: 600px;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 3px 3px 13px #4d4949;
`;

export const Thead = styled.thead`
  background-color: #3cacc5;
`;

export const Th = styled.th`
  min-width: 100px;
  padding: 15px 0;
  color: white;
  text-transform: uppercase;
  &:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const Box = styled.div`
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
`;
