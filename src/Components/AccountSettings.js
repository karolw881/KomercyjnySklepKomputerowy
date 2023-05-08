import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Box, TextField, Grid } from "@mui/material";
import { observer } from "mobx-react";
import globalStore from "../Store/GlobalStore";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";

const AccountSettings = observer(() => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

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

  const user = globalStore.getUser;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/loginy_maile')
      .then(response => {
        const dataE = response.data.map(item => item.email);
        setEmails(dataE);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  function changePassword(event){
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newPassword = data.get("newPassword");

    if(!passwordRegex.test(newPassword))
    {
      errorNotify("Hasło musi się składać z: min 8 znaków i jednej cyfry!");
    }

    else 
    {
      const userData = {
        haslo: newPassword,
        id_uzytkownika: user.id_uzytkownika
      }
  
      axios
        .post("http://localhost:3001/api/passwordChange", userData)
        .then((response) => {
          document.getElementById("newPassword").value = "";
        })
        .catch((error) => {
          console.log(error);
        });
        succcesNotify("Hasło zmienione!");
    }
  }

  function changeEmail(event){
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newEmail = data.get("newEmail");

    if(!emailRegex.test(newEmail))
    {
      errorNotify("Niepoprawny email!");
    }

    else if(emails.indexOf(newEmail) !== -1)
    {
      errorNotify("Taki email już istnieje!");
    }

    else 
    {
      const userData = {
        email: newEmail,
        id_uzytkownika: user.id_uzytkownika
      }
  
      axios
        .post("http://localhost:3001/api/emailChange", userData)
        .then((response) => {
          document.getElementById("newEmail").value = "";
        })
        .catch((error) => {
          console.log(error);
        });
        succcesNotify("Email zmieniony!");
    }
  }
 

  return (
    <>
    
      <ThemeProvider theme={theme}>
      <Box
          component="form"
          noValidate
          onSubmit={changeEmail}
          sx={{ mt: 3, width: "30%", margin:"0 10vw"}}
        >
        <Typography
          sx={{ textAlign: "center", margin: 6 }}
          variant="h3"
          gutterBottom
        >
          Ustawienia Konta
        </Typography>
          <Typography
            sx={{ textAlign: "center", margin:"1vh 10vw" }}
            variant="h6"
            gutterBottom
          >
            Zmień email
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} sx={{margin:"0 10vw"}}>
             
              <TextField
                autoComplete="given-email"
                name="newEmail"
                required
                fullWidth
                id="newEmail"
                label="Nowy email"
                autoFocus
              />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zmień
            </Button>
          
            </Grid>

            
        
          </Grid>
        </Box>

        <Box
          component="form"
          noValidate
          onSubmit={changePassword}
          sx={{ mt: 3, width: "30%", margin: "auto" }}
        >
          <Typography
            sx={{ textAlign: "center", margin: 6 }}
            variant="h6"
            gutterBottom
          >
            Zmień hasło
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} >
             
              <TextField
                autoComplete="given-password"
                name="newPassword"
                required
                fullWidth
                id="newPassword"
                label="Nowe hasło"
                type="password"
                autoFocus
              />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zmień
            </Button>
          
            </Grid>
          </Grid>
        </Box>
        <ToastContainer role="error" />
      </ThemeProvider>
   
    </>
  );
});

export default AccountSettings;
