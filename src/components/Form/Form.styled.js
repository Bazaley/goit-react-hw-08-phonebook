import styled from 'styled-components';

const FormTag = styled.form`
  width: 400px;
  margin: 0 auto;
  padding: 30px 20px 20px;
  border-radius: 4px;
  box-shadow: 5px 5px 16px #756a6a;
`;

const Input = styled.input`
  display: block;
  width: 400px;
  height: 23px;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  outline: none;

  &::placeholder {
    font-size: 21px;
    color: black;
  }
`;

const Label = styled.label`
  display: block;

  margin-bottom: 45px;
`;

const Button = styled.button`
  display: block;
  width: 199px;
  margin: 0 auto;
  padding: 7px;
  border-radius: 4px;
  border: none;
  background-color: blue;
  color: white;
  font-size: 17px;
  cursor: pointer;
`;

export { FormTag, Input, Label, Button };
