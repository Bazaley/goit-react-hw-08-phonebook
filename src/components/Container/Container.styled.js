import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (max-width: 767px) {
    max-width: 468px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
