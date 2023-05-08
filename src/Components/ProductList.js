import '../Index-css/Products.css'
import Grid from '@mui/material/Grid'; // Grid version 1
import {Box} from '@mui/material';





const ProductList = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <Grid item className='product-item' width="calc(100% / 4)" height="30vh" 
                 margin="10px 20px" justifyContent={'center'} borderRadius={6}
                >
                    <Box>
                        <Box fontSize={15} paddingBottom={5}>{product.nazwa}</Box>
                        <Box>{product.cena + " zł"}</Box>
                    </Box>
                </Grid>
            ))}
        </>

    );
}

export default ProductList;