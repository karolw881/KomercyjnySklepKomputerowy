import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import globalStore from '../../Store/GlobalStore';

export default function PaymentForm() {

  const [paymentInfo, setPaymentInfo] = useState({});
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      [id]: value
    }));
    globalStore.setUsersPaymentDetails(paymentInfo); // Ustawienie danych w globalStore
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dane do płatności
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Imie i nazwisko na karcie"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numer karty"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Data wygaśnięcia"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Trzy cyfry na tyle karty"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}