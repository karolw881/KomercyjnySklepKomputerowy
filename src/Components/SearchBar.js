import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { observer } from "mobx-react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const SearchBar = observer(() => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/produkty')
      .then(response => {
        const uniqueProducts = Array.from(new Set(response.data.map(product => product.nazwa)))
          .map(nazwa => {
            return response.data.find(product => product.nazwa === nazwa)
          });
        setProducts(uniqueProducts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  

  return (
    <ThemeProvider theme={darkTheme}>
      <Autocomplete
        id="search-products"
        options={products}
        getOptionLabel={(option) => option.nazwa} // Tutaj zmiana
        renderOption={(props, option) => (
          <li {...props}>
            <Link to="/ProductInfo" state={option}>
              {option.nazwa} {/* Tutaj również zmiana */}
            </Link>
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
        
      />
    </ThemeProvider>
  );
  
});

export default SearchBar;
