import ProductList from "./ProductList";
import { useState } from "react";
import {BsLaptop} from 'react-icons/bs'
import Grid from '@mui/material/Grid'; // Grid version 1
import iphone13 from '../images/iphone13.png';
import redmi from '../images/redmi.png';
import axios from "axios";
import { useEffect } from "react";



const Products = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/produkty')
      .then(response => {
        setProducts(response.data);
        console.log(products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

    return ( 
        <>
        <Grid container spacing={2} height="70vh" maxWidth={1202} margin="auto" justifyContent="center" textAlign="center" borderTop="1px solid white" marginTop={5}>
            {products.map(product => (
            <Grid item key={product.id_produktu}>
            <img src={iphone13} alt="iphone" />
            <h3>{product.nazwa}</h3>
            <p>{product.cena}</p>
          </Grid>
            ))}
        </Grid>
        </>
     );
}
 
export default Products;