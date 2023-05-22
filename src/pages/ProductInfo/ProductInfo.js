import { Box, Typography } from "@mui/material";
import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Categories from "../../Components/Categories";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import AddToCart from "../../Components/AddToCart";
import AddReview from "../../Components/AddReview";
import AddToList from "../../Components/AddToList";
import RatingAVG from "../../Components/RatingAVG";
import RatingToStars from "../../Components/StarRating";
import globalStore from "../../Store/GlobalStore";

const ProductInfo = () => {
  const location = useLocation();
  const product = location.state;
  const productID = product.id_produktu;
  const user = globalStore.getUser;

  const [isLogged, setIsLogged] = useState(false);
  const [oceny, setOceny] = useState([]);

  useEffect(() => {
    if(user)
      setIsLogged(true);
    const getOceny = async () => {
      try {
        const produkt_id = product.id_produktu;
        const response = await axios.post("http://localhost:3001/api/oceny", {
  produkt_id
});
if (response.status === 200) {
  setOceny(response.data);
}
      } catch (error) {
        console.error(error);
      }
    };

    getOceny();
  }, []);

  return (
    <>
      <NavBar />
      <Categories />
      <div style={{display:"flex",flexDirection:"row"}}>
      <Box sx={{width: 600, marginLeft:25}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          style={{ display: "flex", width: "4 0vw", height: "100%",marginTop:"10vh" }}
          src={require(`../../images/${product?.zdjecie}`)}
          alt={product?.nazwa}
        />
      </div>
      </Box>
      <Box sx={{width:600, marginLeft:2, paddingTop:10}}>
      <Typography sx={{ textAlign: "center", marginTop: 6 }} variant="h4" gutterBottom>
        {product?.nazwa}
      </Typography>
      {isLogged && (
          <Typography sx={{textAlign:"center"}} variant="body2">
          Dodaj do listy<AddToList productID={product?.id_produktu}/>
          </Typography>
      )}
      
      <Typography sx={{ textAlign: "center", margin: 2 }} variant="h6" gutterBottom>
      <RatingAVG productID={product?.id_produktu}/>
        {"Cena: " + product?.cena + " zł"} 
        <Typography variant="h6">
          Dodaj do koszyka<AddToCart produktID={product?.id_produktu} />
        </Typography>
         
      </Typography>
      </Box>
      </div>
      <Typography variant="h3" sx={{textAlign: "center", margin: "auto", borderTop:"0.5px solid white",width:1200 }}>
          Opis produktu
      </Typography>
      <Typography sx={{ textAlign: "justify", margin: "auto", width:800 }} variant="h6" gutterBottom>
        {product?.opis}
      </Typography>
      <Typography sx={{ textAlign: "center", margin: 6 }} variant="h3" gutterBottom>
        Specyfikacje
      </Typography>
      <Typography sx={{ textAlign: "justify", margin: "auto", width:800 }} variant="h6" gutterBottom>
        {product?.specyfikacje}
      </Typography>
      <Typography sx={{ textAlign: "center", margin: 6 }} variant="h6" gutterBottom>
        {isLogged && <AddReview productID={product?.id_produktu}/>}
      
        <h1>Oceny użytkowników:</h1>
        {oceny?.map((ocena) => (
          <div style={{marginBottom:"5vh", display:"flex",flexDirection:"row", justifyContent:"center"}} key={ocena.id}>
          <Box sx={{width:200}}>
            <Typography variant="h6">{ocena.imie}<br/><RatingToStars averageRating={ocena.ocena}/></Typography>
          </Box>
          <Box sx={{width:300,paddingTop:2}}>
          <Typography variant="body1">{ocena.tresc}</Typography>
          </Box>
        </div>
        ))}
      </Typography>
      <Footer />
    </>
  );
};

export default ProductInfo;
