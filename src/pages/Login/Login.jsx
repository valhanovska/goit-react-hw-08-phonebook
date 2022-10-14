// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operationsAuth';

// import s from './Login.module.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();

//   const handleChange = e => {
//     const { name, value } = e.currentTarget;

//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         break;
//     }
//   };

//   const reset = () => {
//     setEmail('');
//     setPassword('');
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(logIn({ email, password }));
//     reset();
//   };

//   return (
//     <>
//       <h1>Login</h1>
//       <form className={s.form} onSubmit={handleSubmit}>
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={email}
//             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
//             title="valid@email.com"
//             required
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="text"
//             name="password"
//             value={password}
//             // pattern="/(?=.*[0-9])[0-9a-zA-Z!@#$%^&*]{6,}/g"
//             title="min 6 symbols"
//             required
//             onChange={handleChange}
//           />
//         </label>
//         <button className={s.button} type="submit">
//           Login
//         </button>
//       </form>
//     </>
//   );
// }

// export default Login;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';

const theme = createTheme();

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
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
