import { Route, Routes, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './App.module.css';
import { lazy, Suspense } from 'react';
// import PrivateRoute from 'pages/PrivateRoute';
// import ContactList from './ContactList';

// const MyComponent = lazy(() => import('path/to/MyComponent'));

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('./Contacts'));
const PrivateRoute = lazy(() => import('pages/PrivateRoute'));

// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/login" end className={s.link}>
          Login
        </NavLink>
        <NavLink to="/register" className={s.link}>
          Register
        </NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Route>
          {/* <Route path="/contacts" element={<Contacts />}> */}
          {/* <Route path="cast" element={<Cast />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}

          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </>
  );
};
