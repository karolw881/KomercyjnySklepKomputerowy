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

const Home = observer(() => {
    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (!user) {
          console.log("nie jestes zalogowany")
        } else {
          console.log(user.imie);
          setIsLogged(true);
        }
      }, []);


    function logOut()
    {
        localStorage.removeItem('user');
        globalStore.setUser(null);
        setIsLogged(false);
    }

      if(isLogged)
      {
        return (
            <>
                <NavBar />
                <Categories />
                <Typography variant="h3" sx={{textAlign: "center",margin: "10px 0"}} gutterBottom>
                  <p>Witaj {user?.imie}</p>
                  <Button variant="contained" onClick={logOut}>Wyloguj mnie</Button>
                </Typography>
                <Banner />
                <h1>Polecane produkty</h1>
                <Products kategoria={"Polecane"}/>
                <Footer/>
            </>

        );
      }

    return ( 
        <>
            <NavBar />
            <Categories />
            <Banner />
            <h1>Polecane produkty</h1>
            <Products kategoria={"Polecane"}/>
            <Footer/>
        </>
     );
});
 
export default Home;