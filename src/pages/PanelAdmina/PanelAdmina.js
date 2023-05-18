import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Categories from "../../Components/Categories";
import { observer } from "mobx-react";
import globalStore from "../../Store/GlobalStore";
import { useState, useEffect } from "react";
import AddProductModal from "./AddProductModal";

const PanelAdmina = () => {
    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    

    useEffect(() => {
        if (!user) {
        } else {
          
          setIsLogged(true);
          if(user.rola === "admin")
          {
            setIsAdmin(true);
          }
        }
      }, []);
    
    return ( 
        <>
        <NavBar />
        <Categories />
        {!isAdmin && <h1>Access denied</h1>}
        {isAdmin && (<div style={{textAlign:"center"}}>
          <h1>Witaj Adminie {user?.imie}</h1>
            <AddProductModal />
          </div>
        )}
        <Footer />
        </>
     );
}
 
export default PanelAdmina;