import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectorsAuth';

import s from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
