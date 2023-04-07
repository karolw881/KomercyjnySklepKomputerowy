import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Easy Calories
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SignUp() {
  const [isRegistered, setIsRegistered] = useState(false);
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [logins, setLogins] = useState([]);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/loginy_maile')
      .then(response => {
        const dataL = response.data.map(item => item.login);
        const dataE = response.data.map(item => item.email);
        setLogins(dataL);
        setEmails(dataE);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const errorNotify = (string) =>
    toast.error(string, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const succcesNotify = (string) =>
    toast.success(string, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => {
        setIsRegistered(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isRegistered]);

  function signUpUser(userData) {
    axios
      .post("http://localhost:3001/api/uzytkownicy", userData)
      .then((response) => {
        setIsRegistered(true);
        document.getElementById("firstName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("login").value = "";
        document.getElementById("password").value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      imie: data.get("firstName"),
      email: data.get("email"),
      login: data.get("login"),
      haslo: data.get("password"),
    };

    if (userData.imie.length === 0) {
      errorNotify("💩 Wpisz imie! 💩");
    } else if (userData.email.length === 0) {
      errorNotify("🤮 Wpisz email! 🤮");
    } else if (userData.login.length === 0) {
      errorNotify("😤 Wpisz login! 😤");
    } else if (userData.haslo.length === 0) {
      errorNotify("😒 Wpisz haslo! 😒");
    } else if (!emailRegex.test(userData.email)) {
      errorNotify("Niepoprawny email!");
    } else if (!passwordRegex.test(userData.haslo)) {
      errorNotify("Hasło musi się składać z: min 8 znaków i jednej cyfry!");
    } 
    
    else if(emails.indexOf(userData.email) !== -1)
    {
      errorNotify("Taki email istnieje!");
    }

    else if (logins.indexOf(userData.login) !== -1) {
        errorNotify("Taki login istnieje!");
      }
    
    else {
      succcesNotify("Konto zostało stworzone");
      signUpUser(userData);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Rejestracja
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
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
                <RouterLink to="/Konto">
                  Masz już konto? Zaloguj się!
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <ToastContainer role="error" />
    </ThemeProvider>
  );
}
