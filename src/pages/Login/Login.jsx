import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';

import s from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
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

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  return (
    <>
      <h1>Login</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
            title="valid@email.com"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            // pattern="/(?=.*[0-9])[0-9a-zA-Z!@#$%^&*]{6,}/g"
            title="min 6 symbols"
            required
            onChange={handleChange}
          />
        </label>
        <button className={s.button} type="submit">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
