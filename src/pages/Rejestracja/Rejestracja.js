import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import Register from "../../Components/Register";
import { observer } from "mobx-react";
import globalStore from "../../Store/GlobalStore";
import { useState, useEffect } from "react";

const Rejestracja = observer(() => {
    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (!user) {
        } else {
          console.log(user.imie);
          setIsLogged(true);
        }
      }, []);

    return ( 
        <>
        <NavBar />
        <Categories />
        {!isLogged && <Register />}
        {isLogged && <h1>Jesteś zalogowany!</h1>}
        <Footer />
        </>
     );
})
 
export default Rejestracja;