import { Typography } from "@mui/material";
import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Categories from "../../Components/Categories";
import { useLocation } from "react-router";

const ProductInfo = () => {
  const location = useLocation();
  const product = location.state;

    return ( 

        <>
        <NavBar />
        <Categories />
        <Typography
          sx={{ textAlign: "center", margin: 6 }}
          variant="h2"
          gutterBottom
        >
          {product?.nazwa}
        </Typography>
        <Typography
          sx={{ textAlign: "center", margin: 6 }}
          variant="h3"
          gutterBottom
        >
          {product?.cena}
        </Typography>
        <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
        <img style={{display:"flex",width:"20vw",height: "100%"}} src={require(`../../images/${product?.zdjecie}`)} alt={product?.nazwa} />
        </div>
        <Typography
          sx={{ textAlign: "center", margin: 6 }}
          variant="h4"
          gutterBottom
        >
          {product?.opis}
        </Typography>
        <Typography
          sx={{ textAlign: "center", margin: 6 }}
          variant="h5"
          gutterBottom
        >
          {product?.kategoria}
        </Typography>
        <Typography
          sx={{ textAlign: "center", margin: 6 }}
          variant="h6"
          gutterBottom
        >
          {product?.specyfikacje}
        </Typography>
        <Footer />
        </>
     );
}
 
export default ProductInfo;