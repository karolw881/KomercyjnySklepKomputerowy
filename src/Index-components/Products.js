import ProductList from "./ProductList";
import { useState } from "react";
import {BsLaptop} from 'react-icons/bs'
import {FiSmartphone} from 'react-icons/fi'
import {TfiGame} from 'react-icons/tfi'
import {GiProcessor} from 'react-icons/gi'
import {AiOutlinePrinter} from 'react-icons/ai'
import {SlScreenDesktop} from 'react-icons/sl'
import {MdCable} from 'react-icons/md'
import {CiPercent} from 'react-icons/ci'
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


const Products = () => {

    const [products, setProduct] = useState([
        { name: 'Iphone 13',description: 'Super telefon', price: 2137 ,image: <BsLaptop/>,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 1},
        { name: 'Iphone 13',description: 'Super telefon', price: 2137 ,image: <BsLaptop/>,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 2},
        { name: 'Iphone 13',description: 'Super telefon', price: 2137 ,image: <BsLaptop/>,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 3},
        { name: 'Iphone 13',description: 'Super telefon', price: 2137 ,image: <BsLaptop/>,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 4},
        { name: 'Iphone 13',description: 'Super telefon', price: 2137 ,image: <BsLaptop/>,amount: 100, category: 'Smartphones',manufacturer:'Apple' ,id: 5},
        
    ]);

    return ( 
        <Grid container spacing={2} maxHeight={900} maxWidth={900} margin="auto">
            
            <ProductList products={products}/>
        </Grid>
     );
}
 
export default Products;