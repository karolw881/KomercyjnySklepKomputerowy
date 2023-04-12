import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Products from "../../Components/Products";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import globalStore from "../../Store/GlobalStore";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const Home = observer(() => {
    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
        } else {
          setIsLogged(true);
        }
      }, []);

    return ( 
        <>
            <NavBar />
            <Categories />
            {isLogged &&
            <Typography variant="h3" sx={{textAlign: "center",margin: "10px 0"}} gutterBottom>
            <p>Witaj {user?.imie}</p>
          </Typography>}
            <Banner />
            <h1>Polecane produkty</h1>
            <Products kategoria={"Polecane"}/>
            <Footer/>
        </>
     );
});
 
export default Home;