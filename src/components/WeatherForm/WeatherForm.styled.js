import styled from 'styled-components';

export const FormTag = styled.form`
  width: 400px;
  height: 250px;
  margin: 0 auto;
  padding: 30px 20px 20px;
  border-radius: 4px;
  box-shadow: 5px 5px 16px #756a6a;
  background-color: #82acfb;
  opacity: 0.9;
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

  &::placeholder {
    font-family: Acme;
    font-size: 21px;
    color: black;
  }
`;

export const Label = styled.label`
  display: block;

  margin-bottom: 45px;
  font-size: 22px;
`;
