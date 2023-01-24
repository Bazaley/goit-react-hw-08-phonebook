import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logout } from 'redux/auth/auth-operations';
import { Avatar } from '@mui/material';
import { Box, Paragraph, Button } from './AuthMenu.styled';

const AuthMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box>
      <Paragraph>{`Welcome,  ${user?.name}`}</Paragraph>
      <Avatar sx={{ bgcolor: '#82acfb' }}>{user?.name[0]}</Avatar>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </Box>
  );
};

export default AuthMenu;
