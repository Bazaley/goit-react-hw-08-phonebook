import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import { selectAuthError } from 'redux/selectors';
import { useSelector } from 'react-redux';

import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
  const error = useSelector(selectAuthError);

  return (
    <>
      <Snackbar
        open={error === 400}
        TransitionComponent={props => <Slide {...props} direction="down" />}
        message="Hello"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ marginTop: '20px' }}
      >
        <Alert variant="filled" severity="warning">
          Incorrect login or password
        </Alert>
      </Snackbar>

      <LoginForm />
    </>
  );
};

export default Login;
