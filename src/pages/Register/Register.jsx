import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} name="name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Register;
