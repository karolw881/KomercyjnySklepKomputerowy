import { Typography } from "@mui/material";
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

const ProductInfo = () => {
  const location = useLocation();
  const product = location.state;
  const productID = product.id_produktu;

  const [oceny, setOceny] = useState([]);

  useEffect(() => {
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
      <Typography sx={{ textAlign: "center", margin: 6 }} variant="h2" gutterBottom>
        {product?.nazwa} <RatingAVG productID={product?.id_produktu}/>
      </Typography>
      <Typography sx={{ textAlign: "center", margin: 6 }} variant="h3" gutterBottom>
        {product?.cena + " zł"} <AddToCart produktID={product?.id_produktu}/> <AddToList productID={product?.id_produktu}/> <AddReview productID={product?.id_produktu}/>
      </Typography>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          style={{ display: "flex", width: "20vw", height: "100%" }}
          src={require(`../../images/${product?.zdjecie}`)}
          alt={product?.nazwa}
        />
      </div>
      <Typography sx={{ textAlign: "center", margin: 6 }} variant="h4" gutterBottom>
        {product?.opis}
      </Typography>
      <Typography sx={{ textAlign: "center", margin: 6 }} variant="h5" gutterBottom>
        {product?.kategoria}
      </Typography>
      <Typography sx={{ textAlign: "center", margin: 6 }} variant="h6" gutterBottom>
        {product?.specyfikacje}
      </Typography>
      <Typography sx={{ textAlign: "center", margin: 6 }} variant="h7" gutterBottom>
        <h1>Oceny użytkownikow:</h1>
        {oceny?.map((ocena) => (
          <div key={ocena.id}>
          <Typography variant="body1">{ocena.imie}</Typography>
          <Typography variant="caption">{ocena.tresc}</Typography>
          <Typography variant="caption"> Ocena: {ocena.ocena}/5</Typography>
        </div>
        ))}
      </Typography>
      <Footer />
    </>
  );
};

export default ProductInfo;
