import styled from 'styled-components';

export const FormTag = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;

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

  margin-bottom: 45px;
`;

export const ButtonForm = styled.button`
  display: block;
  width: 199px;
  margin: 0 auto;
  padding: 7px;
  border-radius: 4px;
  border: none;
  background-color: #5c5cec;
  color: white;
  font-size: 17px;
  font-family: Acme;
  cursor: pointer;
`;
