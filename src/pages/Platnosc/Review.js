import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { observer } from 'mobx-react';
import globalStore from '../../Store/GlobalStore';
import axios from 'axios';
import { useState, useEffect } from 'react';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {

    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);
    const [koszyk,setKoszyk] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [payments, setPayments] = useState([]);

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

    useEffect(() => {
        if (!user) {
          console.log("nie jestes zalogowany");
        } else {
          setIsLogged(true);
          getKoszyk();
          setAddresses(globalStore.getUsersShippingData);  
          setPayments(globalStore.getUsersPaymentDetails);
        }
        
      }, []);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Podsumowanie zamówienia
      </Typography>
      <List disablePadding>
        {koszyk.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.nazwa} secondary="Produkt" />
            <Typography variant="body2">{product.cena + " zł"}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Cena" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {globalStore.getTotalPrice.toFixed(2) + " zł"}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Wysyłka
          </Typography>
          <Typography gutterBottom>{addresses.firstName + " " + addresses.lastName}</Typography>
          <Typography gutterBottom>{addresses.address1 + ", " +addresses.address2 + ", " +addresses.city + ", " +addresses.state + ", " +addresses.zip + ", " +addresses.country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Płatność
          </Typography>
          <Grid container>
            
              
                <Grid item xs={6}>
                  <Typography gutterBottom>{payments.cardName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payments.cardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payments.expDate}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payments.cvv}</Typography>
                </Grid>
             
            
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}