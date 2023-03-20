import '../Index-css/Products.css'
import Grid from '@mui/material/Grid'; // Grid version 1
import {Box} from '@mui/material';

const ProductList = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <Grid item width="calc(100% / 4)" height="calc(100% / 2)" border="1px solid blue" margin="10px 20px">
                    <Box>{product.name}</Box>
                </Grid>
            ))}
        </>

    );
}

export default ProductList;