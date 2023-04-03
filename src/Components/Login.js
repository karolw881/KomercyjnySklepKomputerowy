import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import globalStore from '../Store/GlobalStore';
import { is } from '@babel/types';
import Test from '../pages/Test/Test';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Y-kom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SignIn() {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const login = data.get("login");
    const password = data.get("password");
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        login,
        password,
      });
      if (response.status === 200) {
        // zalogowany, przekieruj użytkownika do strony głównej
        localStorage.setItem("user", JSON.stringify(response.data.user));
        globalStore.setUser(JSON.parse(localStorage.getItem("user")));
        navigate("/");
      }
    } catch (error) {
      setLoginError(true);
    }
  };  

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logowanie
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Pamiętaj mnie"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Zapomniałeś hasła?
                </Link>
              </Grid>
              <Grid item>
                <RouterLink to="/Rejestracja">
                  {"Nie masz konta? Załóż konto!"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}