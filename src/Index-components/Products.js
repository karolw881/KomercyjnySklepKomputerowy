import ProductList from "./ProductList";
import { useState } from "react";
import {BsLaptop} from 'react-icons/bs'
import Grid from '@mui/material/Grid'; // Grid version 1
import iphone13 from '../images/iphone13.png';
import redmi from '../images/redmi.png';



const Products = () => {

    const [products, setProduct] = useState([
        { name: 'Iphone 14/64GB/Pro',description: 'Super telefon', price: 2137 ,image: iphone13,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 1},
        { name: 'Iphone 13',description: 'Super telefon', price: 2137 ,image: iphone13,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 2},
        { name: 'Samsung',description: 'TV', price: 2137 ,image: <BsLaptop/>,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 3},
        { name: 'Iphone 13',description: 'Super telefon', price: 2137 ,image: <BsLaptop/>,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 4},
        { name: 'Iphone 13',description: 'Super telefon', price: 2137 ,image: <BsLaptop/>,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 5},
        { name: 'Iphone 13',description: 'Super telefon', price: 2137 ,image: <BsLaptop/>,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 5},
  
    ]);

    return ( 
        <>
        <Grid container spacing={2} height="70vh" maxWidth={1202} margin="auto" justifyContent="center" textAlign="center" borderTop="1px solid white" marginTop={5}>
            <ProductList products={products}/>
        </Grid>
        </>
     );
}
 
export default Products;