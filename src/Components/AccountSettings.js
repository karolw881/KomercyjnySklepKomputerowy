import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Box, TextField, Grid } from "@mui/material";
import { observer } from "mobx-react";
import globalStore from "../Store/GlobalStore";
import axios from "axios";

const AccountSettings = observer(() => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const user = globalStore.getUser;

  function handleSubmit(){}

 

  return (
    <>
    
      <ThemeProvider theme={theme}>
        <Typography
          sx={{ textAlign: "center", margin: 6 }}
          variant="h2"
          gutterBottom
        >
          Ustawienia Konta
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: "30%", margin: "auto"}}
        >
          <Typography
            sx={{ textAlign: "center", margin: 6 }}
            variant="h6"
            gutterBottom
          >
            Zmień adres email
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
             
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
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: 500, margin: "auto" }}
        >
          <Typography
            sx={{ textAlign: "center", margin: 6 }}
            variant="h6"
            gutterBottom
          >
            Zmień hasło
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
             
              <TextField
                autoComplete="given-password"
                name="newPassword"
                required
                fullWidth
                id="newPassword"
                label="Nowe hasło"
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
      </ThemeProvider>
   
    </>
  );
});

export default AccountSettings;
