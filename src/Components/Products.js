import ProductList from "./ProductList";
import { useState } from "react";
import {BsLaptop} from 'react-icons/bs'
import Grid from '@mui/material/Grid'; // Grid version 1
import iphone13 from '../images/ps5.png';
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const Products = ( {kategoria} ) => {

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

  const filteredProducts = kategoria
  ? products.filter(product => product.kategoria === kategoria)
  : products;
  
    return ( 
        <>
        <Grid container spacing={2} maxHeight={10000} maxWidth={1202} margin="auto" justifyContent="center" textAlign="center" borderTop="1px solid white" marginTop={5}>
            {filteredProducts.map(product => (
            <Grid width={400} item key={product.id_produktu}>
            <Link to="/ProductInfo" state={product}>
            <img className="product-img" src={require(`../images/${product.zdjecie}`)} alt={product.nazwa} />
            <h3>{product.nazwa}</h3>
            <p>{product.cena + ' zł'}</p>
            <p>{product.specyfikacje}</p>
            </Link>
          </Grid>
            ))}
        </Grid>
        </>
     );
}
 
export default Products;