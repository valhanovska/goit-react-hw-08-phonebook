// import ColorMode from 'components/ColorMode';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={s.link} to="/register">
        Sign up
      </NavLink>
      <NavLink className={s.link} to="/login">
        Sign in
      </NavLink>
      {/* <ColorMode /> */}
    </div>
  );
};
