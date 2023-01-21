import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logout } from 'redux/auth/auth-operations';
import { Box } from './AuthMenu.styled';

const AuthMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box>
      <p>{`Welcome ${user?.name}`}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </Box>
  );
};

export default AuthMenu;
