import '../Index-css/Products.css'
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2';






const ProductList = ({ products }) => {
    return (
        <>

            {products.map((product) => (

                <Grid container spacing={2} columns={16}>
                    
                </Grid>
            ))}

        </>

    );
}

export default ProductList;