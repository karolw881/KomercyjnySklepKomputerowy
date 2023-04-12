import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import { observer } from "mobx-react";
import globalStore from "../../Store/GlobalStore";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from "@mui/material/IconButton";

const Koszyk = observer(() => {
    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);
    const [koszyk,setKoszyk] = useState([]);
    const [price,setPrice] = useState(0);

    const theme = createTheme({
        palette: {
          mode: "dark",
        },
      });
  

    const succcesNotify = (string) =>
    toast.success(string, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });



    const getKoszyk = async () => {
        try {
            const user_id = user.id_uzytkownika;
            const response = await axios.post("http://localhost:3001/api/koszyk", {
                user_id
            });
            if(response.status === 200)
            {
                setKoszyk(response.data);
                const totalPrice = response.data.reduce((total, product) => total + product.cena, 0);
                setPrice(totalPrice);
            }
        }

        catch(error)
        {
            console.error(error);
        }
      };

    useEffect(() => {
        if (!user) {
          console.log("nie jestes zalogowany");
        } else {
          setIsLogged(true);
          getKoszyk();     
        }
        
      }, []);

      async function deleteProduct(id){

        try{
            const koszyk_id = user.id_uzytkownika;
            const response = await axios.post("http://localhost:3001/api/deleteKoszyk", {
                id, koszyk_id
            });

            if(response.status === 200)
            {
                    succcesNotify("Usunięto z koszyka!");
                    getKoszyk();
            }
            else{
                console.log("error");
            }
        }

        catch(error)
        {
            console.error(error);
        }
    }

    return ( 
        <>
        <NavBar/>
        <Categories/>
        {isLogged && ( <>
          <Typography variant="h1">Twój koszyk</Typography>
          {koszyk?.map((produkt) => (
              <div style={{textAlign:"center",padding:"20px"}} key={produkt?.id}>
                  <Typography variant="body1">{produkt?.id} | {produkt?.nazwa}  |  {produkt?.cena} zł  | Ilość: {produkt?.ilosc} <IconButton onClick={() => deleteProduct(produkt.id)}><RemoveCircleIcon /></IconButton></Typography>
              </div>
          ))} 
          <Typography sx={{textAlign:"center",padding:"20px"}} variant="h4">Cena: {price?.toFixed(2)} zł</Typography>
          <ToastContainer/>
          </>
        )}
        
        {!isLogged && <Typography sx={{textAlign:"center",padding:"20px"}} variant="h3">Zaloguj się aby zobaczyć twój koszyk</Typography>}
        <Footer/>
        </>
    );
})
 
export default Koszyk;