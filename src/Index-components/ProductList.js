import '../Index-css/Products.css'
import Grid from '@mui/material/Grid'; // Grid version 1
import {Box} from '@mui/material';

const ProductList = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <Grid item width={300} height={300} border="1px solid blue">
                    <Box>{product.name}</Box>
                </Grid>
            ))}
        </>

    );
}

export default ProductList;