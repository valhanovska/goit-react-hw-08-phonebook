import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { getUserName } from 'redux/auth/selectorsAuth';

import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
