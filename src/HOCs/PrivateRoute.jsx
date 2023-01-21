import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);

  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
