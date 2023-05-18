import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import Login from "../../Components/Login";
import { observer } from "mobx-react";
import globalStore from "../../Store/GlobalStore";
import { useState, useEffect } from "react";
import AccountSettings from "../../Components/AccountSettings";
import Zamowienia from "../../Components/Zamowienia";

const Konto = observer(() => {
    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (user) 
          setIsLogged(true);
      }, []);


    return ( 
        <>
        <NavBar/>
        <Categories/>
        {isLogged && (<>
          <AccountSettings />
          <Zamowienia />
          </>
        )}

        {!isLogged && (
          <Login/>
        )}
        
        <Footer/>
        
        </>
    );
});
 
export default Konto;