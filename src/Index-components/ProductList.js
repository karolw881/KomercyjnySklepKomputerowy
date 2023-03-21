import '../Index-css/Products.css'
import Grid from '@mui/material/Grid'; // Grid version 1
import {Box} from '@mui/material';
import { bottom, left } from '@popperjs/core';

const ProductList = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <Grid item className='product-item' width="calc(100% / 4)" height="30vh" 
                 margin="10px 20px" justifyContent={'center'} borderRadius={6}
                >
                    <img className='product-img' src={product.image}/>
                    <Box textAlign={left}>
                        <Box fontSize={15} paddingBottom={5}>{product.name}</Box>
                        <Box>{product.price + " zł"}</Box>
                    </Box>
                </Grid>
            ))}
        </>

    );
}

export default ProductList;