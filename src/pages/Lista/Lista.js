import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import globalStore from "../../Store/GlobalStore";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Typography, Box, Button, Modal } from "@mui/material";
import CreateListModal from "../../Components/CreateListModal";
import DisplayLists from "../../Components/DisplayLists";




const Lista = observer(() => {

  const user = globalStore.getUser;
  const [isLogged, setIsLogged] = useState(false);
  
  // List setup

  //end List setup

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
      {!isLogged && (
        <Typography variant="h3" sx={{textAlign:"center"}}>Zaloguj się aby zobaczyć swoje listy!</Typography>
      )}

      {isLogged && (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <CreateListModal />
            <DisplayLists />
          
        </div>
      )}
      <Footer />
    </>
  );
});

export default Lista;