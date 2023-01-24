import styled from 'styled-components';

export const Box = styled.div`
  width: 400px;
  min-height: 250px;
  padding: 30px 20px 20px;
  background-color: #82acfb;
  opacity: 0.9;
  box-shadow: 5px 5px 16px #756a6a;
  border-radius: 4px;
`;

export const FormTag = styled.form`
  width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: block;
  width: 400px;
  height: 23px;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  outline: none;
  background-color: transparent;
  font-family: Acme;
  font-size: 22px;
  &::placeholder {
    font-family: Acme;
    font-size: 21px;
    color: black;
  }
`;

export const Label = styled.label`
  display: block;
  text-shadow: 2px 1px white;
  margin-bottom: 45px;
  font-size: 32px;
`;
