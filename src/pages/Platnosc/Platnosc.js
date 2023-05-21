import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import globalStore from '../../Store/GlobalStore';
import axios from 'axios';
import sendEmail from '../../Components/Email';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Y-Kom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Adres wysyłki', 'Szczegóły płatności', 'Podsumowanie zamówienia'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

export default function Platnosc() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [koszyk, setKoszyk] = useState([]);

  const user = globalStore.getUser;
  const addOrder = async () => {
    try {
        const user_id = user.id_uzytkownika;
        const response = await axios.post("http://localhost:3001/api/addOrder", {
            user_id
        });
        if(response.status === 200)
        {
            console.log("dodano zamowienie!");
        }
    }

    catch(error)
    {
        console.error(error);
    }
};

const getKoszyk = async () => {
  try {
      const user_id = user.id_uzytkownika;
      const response = await axios.post("http://localhost:3001/api/koszyk", {
          user_id
      });
      if(response.status === 200)
      {
          setKoszyk(response.data);
      }
  }

  catch(error)
  {
      console.error(error);
  }
};

const clearKoszyk = async () => {
  try {
      const user_id = user.id_uzytkownika;
      const response = await axios.post("http://localhost:3001/api/clearCart", {
          user_id
      });
      if(response.status === 200)
      {
          console.log("koszyk wyczyszczono");
      }
  }

  catch(error)
  {
      console.error(error);
  }
};

React.useEffect(() => {
  getKoszyk();
}, []);


  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if(activeStep === 2)
    {
      addOrder();
      const formattedKoszyk = koszyk.map((product) => `${product.nazwa} - ${product.cena} zł`).join('\n');
      const totalPrice = koszyk.reduce((total, product) => total + parseFloat(product.cena), 0);
      const userAddress = globalStore.getUsersShippingData;

      sendEmail(user.email, 'Twoje zamówienie', formattedKoszyk, totalPrice, userAddress.firstName + " " + userAddress.lastName + "\n" + userAddress.address1 + " " + userAddress.address2 + "\n" + userAddress.city + ", " + userAddress.state + "\n" + userAddress.zip + ", " + userAddress.country);
      clearKoszyk();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
        <Link to="/">
          <Typography variant="h6" color="inherit" noWrap>
            Y-Kom
          </Typography>
        </Link>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Dziękujemy za zamówienie!
              </Typography>
              <Typography variant="subtitle1">
                Twoje zamówienie jest w trakcie przygotowywania. Szczegóły wyślemy na twojego maila!
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}