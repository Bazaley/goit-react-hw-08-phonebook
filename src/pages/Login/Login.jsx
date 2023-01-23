import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { Section } from 'components/Section/Section';
import Particle from 'components/Particle/Particle';
import { FormTag, Input, Label, Button } from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Section
      title="
    Enter your details and get access to your personal contact book"
    >
      <FormTag onSubmit={handleSubmit}>
        <Label>
          <Input
            type="email"
            value={email}
            name="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Label>
        <Label>
          <Input
            type="password"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Label>
        <Button>Login</Button>
      </FormTag>
      <Particle />
    </Section>
  );
};

export default Login;
