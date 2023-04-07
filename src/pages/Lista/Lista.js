import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import globalStore from "../../Store/GlobalStore";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";



const Lista = observer(() => {

    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (!user) {

        } else {
          setIsLogged(true);
        }
      }, []);

    return ( 
        <>
        <NavBar/>
        <Categories/>
        <Footer/>
        </>
    );
});
 
export default Lista;