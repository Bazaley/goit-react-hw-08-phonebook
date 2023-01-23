import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from 'HOCs/PrivateRoute';
import PublicRoute from 'HOCs/PublicRoute';
import { selectIsFetchingCurrentUser, selectToken } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('pages/Home/Home'));
const AddContacts = lazy(() => import('pages/AddContacts/AddContacts'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch, token]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="addContact"
              element={
                <PrivateRoute>
                  <AddContacts />
                </PrivateRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
