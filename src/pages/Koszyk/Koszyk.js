import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import { observer } from "mobx-react";
import globalStore from "../../Store/GlobalStore";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid,Box, FormGroup, FormControlLabel,Button, Typography, List, ListItem, Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { Link } from "react-router-dom";

const Koszyk = observer(() => {
    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);
    const [koszyk,setKoszyk] = useState([]);
    const [price,setPrice] = useState(0);
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

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
                globalStore.setTotalPrice(totalPrice);
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
        {/* %%%%%%%%%%%%%%%%% */}
        {isLogged && (
          <div style={{width:"94%"}}>
          <Grid container spacing={1} sx={{margin:"2vh 5%"}}>
              <Grid item xs={7} sx={{margin:"0 5vh",border:"1px solid gray", borderRadius:"20px"}}>
              <List dense={dense}>
              {koszyk?.map((produkt) => (
                  <ListItem key={produkt.id}>
                    <img style={{width:"10%",paddingRight:"2%"}} src={require(`../../images/${produkt.zdjecie}`)} alt={produkt.nazwa} />
                    <ListItemText primary={produkt.nazwa} secondary={produkt.cena + "zł"}/>
                    <IconButton onClick={() => deleteProduct(produkt.id)}><DeleteIcon /></IconButton>
                  </ListItem>
                ))} 
              </List>
              </Grid>
              <Grid item xs={3} sx={{border:"1px solid gray", borderRadius:"20px",height:"30vh"}}>
                <Typography variant="body1">Cena:</Typography>
                <Typography variant="body1">{price.toFixed(2) + " zł"}</Typography>
                  <Link to="/Platnosc">
                    <Button variant="contained">Zamawiam</Button>
                  </Link>
              </Grid>
          </Grid>
          </div>
        )}
        
        {/* %%%%%%%%%%%%%%%%% */}
        {!isLogged && <Typography sx={{textAlign:"center",padding:"20px"}} variant="h3">Zaloguj się aby zobaczyć twój koszyk</Typography>}
        <Footer/>
        </>
    );
})
 
export default Koszyk;