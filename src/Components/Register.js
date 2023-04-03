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
import { Link as RouterLink } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Easy Calories
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

export default function SignUp() {

    const [isRegistered, setIsRegistered] = useState(false);
    const [vertical, setVertical] = useState('bottom');
    const [horizontal, setHorizontal] = useState('center');


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setIsRegistered(false);
      };
      
      useEffect(() => {
        if (isRegistered) {
          const timer = setTimeout(() => {
            setIsRegistered(false);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [isRegistered]);


    function signUpUser(userData) {
        axios.post('http://localhost:3001/api/uzytkownicy', userData)
            .then(response => {
                setIsRegistered(true);
            })
            .catch(error => {
                console.log(error);
            });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            imie: data.get('firstName'),
            email: data.get('email'),
            login: data.get('login'),
            haslo: data.get('password'),
        };
        signUpUser(userData);
    };

    return (
        <ThemeProvider theme={theme}>
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
                        Rejestracja
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Imie"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="login"
                                    label="Login"
                                    name="login"
                                    autoComplete="login"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Hasło"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <RouterLink to='/Konto'>
                                    Masz już konto? Zaloguj się!
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={isRegistered}
                autoHideDuration={5000}
                message="Rejestracja zakończona pomyślnie"
                color="info"
                key={vertical + horizontal}
            />

        </ThemeProvider>
    );

};