import styled from 'styled-components';

const FormTag = styled.form`
  width: 400px;
  margin: 0 auto;
  padding: 30px 20px 20px;
  border-radius: 4px;
  box-shadow: 5px 5px 16px #756a6a;

  background: linear-gradient(
    130deg,
    #008080,
    #20b2aa,
    #00ffff,
    #48d1cc,
    #00ced1
  );
  opacity: 0.9;
`;

const Input = styled.input`
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

const Label = styled.label`
  display: block;

  margin-bottom: 45px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 199px;
  height: 35px;
  margin: 0 auto;

  border-radius: 4px;
  border: none;
  background-color: #008080;
  color: white;
  font-size: 17px;
  font-family: Acme;
  cursor: pointer;
`;

export { FormTag, Input, Label, Button };
