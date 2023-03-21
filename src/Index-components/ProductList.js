import '../Index-css/Products.css'
import Grid from '@mui/material/Grid'; // Grid version 1
import {Box} from '@mui/material';
import { left } from '@popperjs/core';

const ProductList = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <Grid item className='product-item' width="calc(100% / 4)" height="30vh" 
                border="1px solid blue" margin="10px 20px" 
                >
                    <img className='product-img' src={product.image}/>
                    <Box>{product.name}</Box>
                    <Box textAlign={left}>{product.price + " zł"}</Box>
                </Grid>
            ))}
        </>

    );
}

export default ProductList;