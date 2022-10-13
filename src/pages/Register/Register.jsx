import { useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './Register.module.css';
import { register } from 'redux/auth/operationsAuth';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  return (
    <>
      <h1>Registration</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Z]+$"
            title="Please enter valid name"
            required
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
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
        <label className={s.label}>
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
          Register
        </button>
      </form>
    </>
  );
}

export default Register;
