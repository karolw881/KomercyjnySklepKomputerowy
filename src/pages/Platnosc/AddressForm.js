import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import globalStore from '../../Store/GlobalStore';

export default function AddressForm() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
      });

    const [valid, setValid] = useState({
        firstName: false,
        lastName: false,
        address1: false,
        address2: true, // nie jest wymagane
        city: false,
        state: false, // jest wymagane
        zip: false,
        country: false
      });

      const regexName = /^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]{2,}$/;
      const regexAddress = /^[a-zA-Z0-9\s,'-]*$/;
      const regexCity = /^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]{2,}$/;
      const regexZipCode = /^[0-9]{2}\-[0-9]{3}$/;
      const regexCountry = /^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]{2,}$/;

      const validateField = (name, value) => {
        switch (name) {
          case 'firstName': return regexName.test(value);
          case 'lastName': return regexName.test(value);
          case 'city': return regexCity.test(value);
          case 'country':
            return regexName.test(value);
          case 'address1': return regexAddress.test(value);
          case 'address2':
          case 'zip': return regexZipCode.test(value);
            return regexZipCode.test(value);
          default:
            return true;
        }
      };

    const handleChange = (e) => {
        
        const { name, value } = e.target;
        
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
        globalStore.setUsersShippingData(data);
    };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dane do wysyłki
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Imie"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={data.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nazwisko"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={data.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Adres 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={data.address1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Adres 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={data.address2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Miasto"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={data.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Region/Województwo"
            fullWidth
            variant="standard"
            value={data.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Kod pocztowy"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={data.zip}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Kraj"
            fullWidth
            autoComplete="Kraj"
            variant="standard"
            value={data.country}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}